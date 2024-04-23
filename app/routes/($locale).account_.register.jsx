import {json, redirect} from '@shopify/remix-oxygen';
import {Form, Link, useActionData} from '@remix-run/react';

export async function loader({context}) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account');
  }

  return json({});
}

export const action = async ({request, context}) => {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {storefront, session} = context;
  const form = await request.formData();
  const email = String(form.has('email') ? form.get('email') : '');
  const password = form.has('password') ? String(form.get('password')) : null;
  const passwordConfirm = form.has('passwordConfirm')
    ? String(form.get('passwordConfirm'))
    : null;

  const validPasswords =
    password && passwordConfirm && password === passwordConfirm;

  const validInputs = Boolean(email && password);
  try {
    if (!validPasswords) {
      throw new Error('Passwords do not match');
    }

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const {customerCreate} = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {email, password},
      },
    });

    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }

    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not create customer');
    }
    //console.log(newCustomer.id)

    // get an access token for the new customer
    const {customerAccessTokenCreate,} = await storefront.mutate(
      REGISTER_LOGIN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          },
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error('Missing access token');
    }
    session.set(
      'customerAccessToken',
      customerAccessTokenCreate?.customerAccessToken,
    );

    return json(
      {error: null, newCustomer},
      {
        status: 302,
        headers: {
          'Set-Cookie': await session.commit(),
          Location: '/account',
        },
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
};

export default function Register() {
  const data = useActionData();
  const error = data?.error || null;
  return (
    <>
    {/*
    <div className="login">
      <h1>Register.</h1>
      <Form method="POST">
        <fieldset>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            aria-label="Password"
            minLength={8}
            required
          />
          <label htmlFor="passwordConfirm">Re-enter password</label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="current-password"
            placeholder="Re-enter password"
            aria-label="Re-enter password"
            minLength={8}
            required
          />
        </fieldset>
        {error ? (
          <p>
            <mark>
              <small>{error}</small>
            </mark>
          </p>
        ) : (
          <br />
        )}
        <button type="submit">Register</button>
      </Form>
      <br />
      <p>
        <Link to="/account/login">Login →</Link>
      </p>
    </div>*/}
    <div className="flex flex-col sm:flex-row">
    <div className="sm:w-2/3  sm:block">
      <img
        src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234"
        alt="Login Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full justify-center items-center flex flex-col">
      <Form className="w-full justify-center items-center login_wrapper" method="POST">
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
            placeholder="Email address"
            aria-label="Email address"
            required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          aria-label="Password"
          minLength={8}
          required/>
          {error ? (
              <p className="text-red-500 text-xs italic">{error}</p>
            ) : (
              <br />
            )}
          <label htmlFor="passwordConfirm">Re-enter password</label>
              <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                autoComplete="current-password"
                placeholder="Re-enter password"
                aria-label="Re-enter password"
                minLength={8}
                required
              />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/recover">
            Forgot Password?
          </a>
        </div>
        <a className="py-4 text-blue-500" href="/account/login"> Login </a>
        </fieldset>
      </Form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2023. All rights reserved.
    </p>
  </div>   
</div>
</>
);
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate
const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraccesstokencreate
const REGISTER_LOGIN_MUTATION = `#graphql
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
