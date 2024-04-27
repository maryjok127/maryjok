const LooksComp = ({looks})=>{
    var products = looks.length ?looks[0].products.edges : [];
    return(
        <div className="looks">
            <h1 className="uppercase text-center font-semibold my-[15px]"> L.I.T : Looks In Trend </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:grid-cols-4 md:px-4 lg:px-24">
                {
                    products.map((product)=>{
                        return(
                            <div className="relative">
                            <img  src={product?.node.images.edges[0].node.url} />
                            <p className="looks_tittle absolute bottom-2 text-center"> {product?.node.title} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LooksComp;