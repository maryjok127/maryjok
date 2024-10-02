import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: "15f63f.myshopify.com", // || Oxygen?.env?.PUBLIC_STORE_DOMAIN,
    storefrontToken: "01d8008c51106950f4f7a55808561f1c", // Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN ||,
    storefrontApiVersion: '2024-10',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});