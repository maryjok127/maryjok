import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import { useEffect, useState } from 'react';


export async function loader({params, context}) {
    const {storefront,cart} = context;
    const cartPromise = cart.get();
    
    if (!params.id) {
        return redirect('/');
    }
  return json({lookbook_id:params.id , context});
}

export async function action({request, context}) {
  const {session, cart} = context;
  console.log("cartPromise POST::",cart)
}


export default function LookBook() {
    const { lookbook_id, context } = useLoaderData();
    //console.log("storefront:",context);
    const [p_id, setId] = useState()
    useEffect(()=>{
        setId(lookbook_id);
    },[])

    // const addTocart = async()=>{
    //  const res = await storefront.mutation(mutationCart);
    //  console.log("addTocart::res:",res)
    // }
   
    const mutationCart = `{ cartCreate(
      input: {
          lines: [
            {
              quantity: 1
              merchandiseId: "gid://shopify/ProductVariant/1"
            }
          ]
        }
      )
    }`
    
    
    return (
      <div>
        <div  className="mst-slider"></div>
        <div id="sg-app" className="mst-gallery-root"></div>
        {/* <script src={`https://shopify.shopthelook.app/shopthelook.js?shop=15f63f.myshopify.com&widget=1&mainProductId=${lookbook_id}`}></script> */}
        {/* <div className="ShopTheLook-section" data-product-id={p_id}></div> */}
      </div>
    );
  }