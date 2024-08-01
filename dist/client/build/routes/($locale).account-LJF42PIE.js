import{a as d,b as f,c as l}from"/build/_shared/chunk-3H3HPXK5.js";import{a as y}from"/build/_shared/chunk-6VAH6Z7X.js";import"/build/_shared/chunk-KB3XA2LO.js";import"/build/_shared/chunk-FDI22BWB.js";import{i,j as u,r as m,x as c}from"/build/_shared/chunk-G7BGYXZV.js";import{d as n}from"/build/_shared/chunk-G5WX4PPA.js";var r=n(y());var e=n(c());function p({heading:t}){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"}),(0,e.jsx)("div",{className:"bg-white"}),(0,e.jsx)("div",{className:"bg-white",children:(0,e.jsx)("div",{className:"flex-col flex",children:(0,e.jsx)("div",{className:"flex bg-gray-100  overflow-x-hidden",children:(0,e.jsx)("div",{className:"bg-white lg:flex md:w-60 md:flex-col hidden",children:(0,e.jsx)("div",{className:"flex-col p-2 flex overflow-y-auto",children:(0,e.jsx)("div",{className:"h-full justify-between flex",children:(0,e.jsx)("div",{className:"space-y-4",children:(0,e.jsxs)("div",{className:"bg-top bg-cover space-y-1",children:[(0,e.jsx)("section",{className:"w-40 mx-auto bg-[#20354b] rounded-2xl shadow-lg",children:(0,e.jsx)("div",{className:"w-fit mx-auto",children:(0,e.jsx)("img",{src:"https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe",className:"rounded-full w-20 ",alt:"profile picture",srcset:""})})}),(0,e.jsxs)("a",{href:"/account/order",className:`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer`,children:[(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"items-center justify-center flex",children:(0,e.jsx)(r.ListItemPrefix,{children:(0,e.jsx)(f,{className:"h-5 w-5"})})})})})}),(0,e.jsx)("span",{children:"Order"})]}),(0,e.jsxs)("a",{href:"/account/profile",className:`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer`,children:[(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"items-center justify-center flex",children:(0,e.jsx)(r.ListItemPrefix,{children:(0,e.jsx)(l,{className:"h-5 w-5"})})})})})}),(0,e.jsx)("span",{children:"Profile"})]}),(0,e.jsxs)("a",{href:"/account/addresses",className:`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer`,children:[(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"items-center justify-center flex",children:(0,e.jsx)(r.ListItemPrefix,{children:(0,e.jsx)(l,{className:"h-5 w-5"})})})})})}),(0,e.jsx)("span",{children:"Address"})]}),(0,e.jsx)(h,{})]})})})})})})})})]})})}function h(){return(0,e.jsxs)("a",{href:"#",className:`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer`,children:[(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"justify-center items-center flex",children:(0,e.jsx)("span",{className:"items-center justify-center flex",children:(0,e.jsx)(r.ListItemPrefix,{children:(0,e.jsx)(d,{className:"h-5 w-5"})})})})})}),(0,e.jsx)(u,{method:"POST",action:"/account/logout",children:(0,e.jsx)("button",{type:"submit",children:"Sign out"})})]})}var s=n(c());function N(){return!0}function g(){let{customer:t,isPrivateRoute:o,isAccountHome:a}=m();return!o&&!a?(0,s.jsx)(i,{context:{customer:t}}):(0,s.jsxs)(v,{customer:t,children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i,{context:{customer:t}})]})}function v({customer:t,children:o}){let a=t?t.firstName?t.firstName:t.lastName:"Account Details";return(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(b,{heading:a}),o]})}function b({heading:t}){function o({isActive:a,isPending:x}){return{fontWeight:a?"bold":"",color:x?"grey":"black"}}return(0,s.jsx)(p,{heading:t})}var w=`#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`,B=`#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${w}
`;export{g as default,N as shouldRevalidate};
