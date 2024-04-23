import {json, redirect} from '@shopify/remix-oxygen';
import {Form, Link, useActionData} from '@remix-run/react';

export async function loader({context}) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account');
  }

  return json({});
}

export async function action({request, context}) {
  const {storefront} = context;
  const form = await request.formData();
  const email = form.has('email') ? String(form.get('email')) : null;

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    if (!email) {
      throw new Error('Please provide an email.');
    }
    await storefront.mutate(CUSTOMER_RECOVER_MUTATION, {
      variables: {email},
    });

    return json({resetRequested: true});
  } catch (error) {
    const resetRequested = false;
    if (error instanceof Error) {
      return json({error: error.message, resetRequested}, {status: 400});
    }
    return json({error, resetRequested}, {status: 400});
  }
}

export default function Recover() {
  const action = useActionData();

  return (
    <>
    {/*<div className="account-recover">
      <div>
        {action?.resetRequested ? (
          <>
            <h1>Request Sent.</h1>
            <p>
              If that email address is in our system, you will receive an email
              with instructions about how to reset your password in a few
              minutes.
            </p>
            <br />
            <Link to="/account/login">Return to Login</Link>
          </>
        ) : (
          <>
            <h1>Forgot Password.</h1>
            <p>
              Enter the email address associated with your account to receive a
              link to reset your password.
            </p>
            <br />
            <Form method="POST">
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  aria-label="Email address"
                  autoComplete="email"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                  type="email"
                />
              </fieldset>
              {action?.error ? (
                <p>
                  <mark>
                    <small>{action.error}</small>
                  </mark>
                </p>
              ) : (
                <br />
              )}
              <button type="submit">Request Reset Link</button>
            </Form>
            <div>
              <br />
              <p>
                <Link to="/account/login">Login →</Link>
              </p>
            </div>
          </>
        )}
      </div>
              </div>*/}
              <div className="flex flex-col sm:flex-row">
<div className="sm:w-1/2  sm:block">

        <img
          src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>
      {action?.resetRequested ? (
          <>
            <h1>Request Sent.</h1>
            <p>
              If that email address is in our system, you will receive an email
              with instructions about how to reset your password in a few
              minutes.
            </p>
            <br />
            <Link to="/account/login">Return to Login</Link>
          </>
        ) : (
      <div className="w-full justify-center items-center flex flex-col">
  <Form className="w-full justify-center items-center login_wrapper" method="POST">
   <fieldset>
    <div className="mb-3" >
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
       aria-label="Email address"
       autoComplete="email"
       // eslint-disable-next-line jsx-a11y/no-autofocus
       autoFocus
       id="email"
       name="email"
       placeholder="Email address"
       required
       type="email"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Request Reset Link
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/account/login">
        Login
      </a>
    </div>
     </fieldset>
    
  </Form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023. All rights reserved.
  </p>
</div>)}
      
    </div>
              </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customerrecover
const CUSTOMER_RECOVER_MUTATION = `#graphql
  mutation customerRecover(
    $email: String!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
