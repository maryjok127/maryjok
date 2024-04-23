import {json, redirect} from '@shopify/remix-oxygen';
import React, { useState } from 'react';
import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext,
} from '@remix-run/react';

export const meta = () => {
  return [{title: 'Profile'}];
};

export async function loader({context}) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (!customerAccessToken) {
    return redirect('/account/login');
  }
  return json({});
}

export async function action({request, context}) {
  const {session, storefront} = context;

  if (request.method !== 'PUT') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const form = await request.formData();
  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken) {
    return json({error: 'Unauthorized'}, {status: 401});
  }

  try {
    const password = getPassword(form);
    const customer = {};
    const validInputKeys = [
      'firstName',
      'lastName',
      'email',
      'password',
      'phone',
    ];
    for (const [key, value] of form.entries()) {
      if (!validInputKeys.includes(key)) {
        continue;
      }
      if (key === 'acceptsMarketing') {
        customer.acceptsMarketing = value === 'on';
      }
      if (typeof value === 'string' && value.length) {
        customer[key] = value;
      }
    }

    if (password) {
      customer.password = password;
    }

    // update customer and possibly password
    const updated = await storefront.mutate(CUSTOMER_UPDATE_MUTATION, {
      variables: {
        customerAccessToken: customerAccessToken.accessToken,
        customer,
      },
    });

    // check for mutation errors
    if (updated.customerUpdate?.customerUserErrors?.length) {
      return json(
        {error: updated.customerUpdate?.customerUserErrors[0]},
        {status: 400},
      );
    }

    // update session with the updated access token
    if (updated.customerUpdate?.customerAccessToken?.accessToken) {
      session.set(
        'customerAccessToken',
        updated.customerUpdate?.customerAccessToken,
      );
    }

    return json(
      {error: null, customer: updated.customerUpdate?.customer},
      {
        headers: {
          'Set-Cookie': await session.commit(),
        },
      },
    );
  } catch (error) {
    return json({error: error.message, customer: null}, {status: 400});
  }
}

export default function AccountProfile() {
  const account = useOutletContext();
  const {state} = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission here.
    // Combine profileData and passwordData as needed.

    console.log('Profile Data:', profileData);
    console.log('Password Data:', passwordData);
  };

  return (
    <>
    <div className="w-full h-full justify-center items-center">
      <Form className="w-full justify-center items-center" method="PUT">
      <fieldset>
        <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First name</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            aria-label="First name"
            defaultValue={customer.firstName ?? ''}
            minLength={2}
          />
          </div>
          <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last name</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            aria-label="Last name"
            defaultValue={customer.lastName ?? ''}
            minLength={2}
          />
          </div>
          <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Mobile</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Mobile"
            aria-label="Mobile"
            defaultValue={customer.phone ?? ''}
          />
          </div>
          <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email address</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            defaultValue={customer.email ?? ''}
          />
          </div>
        <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">Current password</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="currentPassword"
            name="currentPassword"
            type="password"
            autoComplete="current-password"
            placeholder="Current password"
            aria-label="Current password"
            minLength={8}
          />
          </div>
          <div className="mb-3" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New password</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="New password"
            aria-label="New password"
            minLength={8}
          />
          </div>
          <small>Passwords must be at least 8 characters.</small>
        </fieldset>
        <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit" disabled={state !== 'idle'}>
      {state !== 'idle' ? 'Updating' : 'Update'}
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/recover">
        Forgot Password?
      </a>
    </div>
      </Form>
      </div>
        {/*
        <div className="w-full h-full justify-center items-center">
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleTabChange('profile')}
          className={`${
            activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-10 py-2 rounded-l`}
        >
          Profile
        </button>
        <button
          onClick={() => handleTabChange('password')}
          className={`${
            activeTab === 'password' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded-r`}
        >
          Change Password
        </button>
      </div>
      <div className="mt-4 p-4 justify-center items-center">
        {activeTab === 'profile' ? (
          <Form className="w-full justify-center items-center" method="PUT">
          <fieldset>
           <div className="mb-3" >
             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
               Email
             </label>
             <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="email"
               name="email"
               type="email"
               autoComplete="email"
               required
               placeholder="Email address"
               aria-label="Email address"
               defaultValue={customer.email ?? ''}
               disabled/>
           </div>
           <div className="mb-3" >
             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
               First Name
             </label>
             <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="firstName"
               name="firstName"
               type="text"
               autoComplete="given-name"
               placeholder="First name"
               aria-label="First name"
               defaultValue={customer.firstName ?? ''}
               minLength={2}/>
           </div>
           <div className="mb-3" >
             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
               Last Name
             </label>
             <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="lastName"
               name="lastName"
               type="text"
               autoComplete="family-name"
               placeholder="Last name"
               aria-label="Last name"
               defaultValue={customer.lastName ?? ''}
               minLength={2}/>
           </div>
           <div className="mb-3" >
             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
               Phone
             </label>
             <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="phone"
               name="phone"
               type="tel"
               autoComplete="tel"
               placeholder="Mobile"
               aria-label="Mobile"
               defaultValue={customer.phone ?? ''}/>
           </div>
            </fieldset>
           <div className="flex items-center justify-between">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
               Update
             </button>
             <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/recover">
               Forgot Password?
             </a>
           </div>
         </Form>
        ) : (
          <Form className="w-full justify-center items-center" method="POST">
   <fieldset>
    <div className="mb-3" >
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Current Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="currentPassword"
        name="currentPassword"
        type="password"
        aria-label="Current password"
        minLength={8} required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       New Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password"
      name="password"
      type="password"
      aria-label="Password"
      minLength={8}
      required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       Confirm New Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="newPasswordConfirm"
      name="newPasswordConfirm"
      type="password"
      aria-label="New password confirm"
      minLength={8}/>
    </div>
     </fieldset>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Update
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/recover">
        Forgot Password?
      </a>
    </div>
  </Form>
        )}
      </div>
        </div>*/}
     </>   
  );
}

function getPassword(form) {
  let password;
  const currentPassword = form.get('currentPassword');
  const newPassword = form.get('newPassword');
  const newPasswordConfirm = form.get('newPasswordConfirm');

  let passwordError;
  if (newPassword && !currentPassword) {
    passwordError = new Error('Current password is required.');
  }

  if (newPassword && newPassword !== newPasswordConfirm) {
    passwordError = new Error('New passwords must match.');
  }

  if (newPassword && currentPassword && newPassword === currentPassword) {
    passwordError = new Error(
      'New password must be different than current password.',
    );
  }

  if (passwordError) {
    throw passwordError;
  }

  if (currentPassword && newPassword) {
    password = newPassword;
  } else {
    password = currentPassword;
  }

  return String(password);
}

const CUSTOMER_UPDATE_MUTATION = `#graphql
  # https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customerAccessToken: String!,
    $customer: CustomerUpdateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        acceptsMarketing
        email
        firstName
        id
        lastName
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
