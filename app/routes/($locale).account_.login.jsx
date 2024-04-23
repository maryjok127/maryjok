import {json, redirect} from '@shopify/remix-oxygen';
import {Form, Link, useActionData} from '@remix-run/react';
import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";


import { LockClosedIcon } from '@heroicons/react/solid' 

export const meta = () => {
  return [{title: 'Login'}];
};

export async function loader({context}) {
  if (await context.session.get('customerAccessToken')) {

    return redirect('/account');
  }
  return json({});
}

export async function action({request, context}) {
  const {session, storefront} = context;

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    const form = await request.formData();
    const email = String(form.has('email') ? form.get('email') : '');
    const password = String(form.has('password') ? form.get('password') : '');
    const validInputs = Boolean(email && password);

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const {customerAccessTokenCreate} = await storefront.mutate(
      LOGIN_MUTATION,
      {
        variables: {
          input: {email, password},
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error(customerAccessTokenCreate?.customerUserErrors[0].message);
    }

    const {customerAccessToken} = customerAccessTokenCreate;
    //console.log(customerAccessToken)
    session.set('customerAccessToken', customerAccessToken);

    return redirect('/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function Login() {
  const data = useActionData();
  const error = data?.error || null;
  console.log(data)
  console.log(error)
  return (
    <>  
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-2/3 sm:block">
          <img
            src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234"
            alt="Login Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full justify-center items-center flex flex-col">
        <Form className="w-full m-auto login_wrapper" method="POST">
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
          </div>
          
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/recover">
              Forgot Password?
            </a>
          </div>
          <a className="py-4 text-blue-500" href="/account/register"> Register </a>
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

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraccesstokencreate
const LOGIN_MUTATION = `#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
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
