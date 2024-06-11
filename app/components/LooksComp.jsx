import { Link} from '@remix-run/react';
import { Suspense } from 'react';

const LooksComp = ({looks})=>{
    const getProductId = (gid)=>{
        let split = gid.split("/");
        let id = split[split.length - 1]; 
        return id;
    }
    var products = looks.length ?looks[0].products.edges : [];
    return(
        <div className="md:px-4 pb-4 lg:px-24">
            <Suspense fallback={<p> Loading </p>}>
             <h1 className="uppercase text-center font-semibold my-[15px]"> L.I.T : Looks In Trend </h1>
             <div  className="mst-slider"></div>
             <div id="sg-app" className="mst-gallery-root"></div>
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
            <script async src="https://s3.amazonaws.com/cdn.myshopapps.com/sg-gallery-hydrogen/787.chunk.js"></script>
            <script async src="https://s3.amazonaws.com/cdn.myshopapps.com/sg-gallery-hydrogen/main.js"></script>
            </Suspense>
        </div>
    )
}

export default LooksComp;