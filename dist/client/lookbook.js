

setTimeout(()=>{
    document.querySelectorAll('.js-action.shopthelook_add-to-cart').forEach(function(button) {
        button.addEventListener('click', async function(event) {
          console.log("OVERRIDE CART CALL STOREFRONT");
            event.preventDefault(); // Prevent the default behaviour from Shop The Look
        });
    });
   
    // var _this = this;
    // var priceList = document.querySelectorAll(".ctl-product-price");
    // console.log("priceList::",priceList)
    // priceList.forEach((node)=>{
    //     var e = document.createElement('div');
    //     e.innerHTML = `<button class="mst_cart_btn" onClick="${addTocart(storefront)}" type="submit">Add To Cart</button>`;
    //     node.appendChild(e)
    // })
   
    var list = document.querySelectorAll(".ctl-product-link");
    if(!list.length) window.location.reload();
    list.forEach((node)=>{
        let oldHref = node.getAttribute('href');
        let rmParams = oldHref.split("?"); 
        var newHref = rmParams[0].replace("https://15f63f.myshopify.com/","/");
        node.setAttribute("href",newHref)
    });
},800)


