import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import { useEffect, useState } from 'react';


export async function loader({params, context}) {
    if (!params.id) {
        return redirect('/');
    }
  return json({lookbook_id:params.id});
}

export default function LookBook() {
    const { lookbook_id } = useLoaderData();
    const [p_id, setId] = useState()
    useEffect(()=>{
        setId(lookbook_id);
    },[])
    return (
      <div className="page">
        <script src={`https://shopify.shopthelook.app/shopthelook.js?shop=15f63f.myshopify.com&widget=1&mainProductId=${lookbook_id}`}></script>
        <script src="../lookbook.js"></script>
        <div class="ShopTheLook-section" data-product-id={p_id}></div>
      </div>
    );
  }