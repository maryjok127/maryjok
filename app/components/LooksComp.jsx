import { Link} from '@remix-run/react';
import { Suspense,useState,useEffect } from 'react';

const LooksComp = ({looks})=>{
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(()=>{
        setDomLoaded(true)
    },[]) 
    return(
        <div className="md:px-4 pb-4 lg:px-24"> 
            { domLoaded &&
            <>
             <h1 className="uppercase text-center font-semibold my-[15px]"> L.I.T : Looks In Trend </h1>
             <div  className="mst-slider"></div>
             <div id="sg-app" className="mst-gallery-root"></div>
             </>
            }
        </div>
    )
}

export default LooksComp;


 {/* 
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:grid-cols-4 md:px-4 pb-4 lg:px-24">
                {
                    products.map((product,index)=>{
                        return(
                            <div key={`looks_${index}`} className="relative">
                            <Link reloadDocument to={`/lookbook/${getProductId(product.node.id)}`} ><img src={product?.node.images.edges[0].node.url} /></Link>
                            <p className="looks_tittle absolute bottom-2 text-center"> {product?.node.title} </p>
                            </div>
                        )
                    })
                }
            </div> */}
