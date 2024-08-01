import"/build/_shared/chunk-3H3HPXK5.js";import{a as g}from"/build/_shared/chunk-6VAH6Z7X.js";import"/build/_shared/chunk-MCK46MEE.js";import"/build/_shared/chunk-KB3XA2LO.js";import"/build/_shared/chunk-FDI22BWB.js";import"/build/_shared/chunk-4UNU5TGX.js";import{l as i,r as m,x as u}from"/build/_shared/chunk-G7BGYXZV.js";import{d as c}from"/build/_shared/chunk-G5WX4PPA.js";var e=c(g()),t=c(u()),p=()=>[{title:"Orders"}];function l(){let{customer:r}=m(),{orders:s,numberOfOrders:n}=r;return(0,t.jsxs)("div",{className:"h-full w-full p-4",children:[(0,t.jsxs)("h2",{children:["Orders ",(0,t.jsxs)("small",{children:["(",n,")"]})]}),(0,t.jsx)("br",{}),s.nodes.length?(0,t.jsx)(y,{orders:s}):(0,t.jsx)(f,{})]})}function y({orders:r}){return(0,t.jsx)("div",{children:(0,t.jsx)(b,{orders:r})})}function f(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"You haven't placed any orders yet."}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)(i,{to:"/collections",children:"Start Shopping \u2192"})})]})}function b({orders:r}){let s=["Product","Amount","Date","Status"],n=[{img:"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",name:"Spotify",amount:"$2,500",date:"Wed 3:00pm",status:"paid",account:"visa",accountNumber:"1234",expiry:"06/2026"},{img:"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",name:"Amazon",amount:"$5,000",date:"Wed 1:00pm",status:"paid",account:"master-card",accountNumber:"1234",expiry:"06/2026"},{img:"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",name:"Pinterest",amount:"$3,400",date:"Mon 7:40pm",status:"pending",account:"master-card",accountNumber:"1234",expiry:"06/2026"},{img:"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",name:"Google",amount:"$1,000",date:"Wed 5:00pm",status:"paid",account:"visa",accountNumber:"1234",expiry:"06/2026"},{img:"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",name:"netflix",amount:"$14,000",date:"Wed 3:30am",status:"cancelled",account:"visa",accountNumber:"1234",expiry:"06/2026"}];return(0,t.jsx)(e.Card,{className:"h-[90] overflow-y-auto w-full",children:(0,t.jsx)(e.CardBody,{className:"px-0",children:(0,t.jsxs)("table",{className:"w-full table-auto text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:s.map(a=>(0,t.jsx)("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:(0,t.jsx)(e.Typography,{variant:"small",color:"blue-gray",className:"font-normal leading-none opacity-70",children:a})},a))})}),(0,t.jsx)("tbody",{children:r.nodes.map((a,d)=>{let o=d===n.length-1?"p-4":"p-4 border-b border-blue-gray-50";return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:o,children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(e.Avatar,{src:a.lineItems.nodes[0].variant.image.url,alt:a.lineItems.nodes[0].title,size:"md",className:"border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"}),(0,t.jsx)(e.Typography,{variant:"small",color:"blue-gray",className:"font-bold",children:a.lineItems.nodes[0].title})]})}),(0,t.jsx)("td",{className:o,children:(0,t.jsx)(e.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:a.currentTotalPrice.amount})}),(0,t.jsx)("td",{className:o,children:(0,t.jsx)(e.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:a.processedAt})}),(0,t.jsx)("td",{className:o,children:(0,t.jsx)("div",{className:"w-max",children:(0,t.jsx)(e.Chip,{size:"sm",variant:"ghost",value:a.financialStatus,color:a.financialStatus==="paid"?"green":a.financialStatus==="pending"?"amber":"red"})})})]},a.lineItems.nodes[0].title)})})]})})})}var h=`#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`,v=`#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${h}
`,S=`#graphql
  ${v}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;export{l as default,p as meta};
