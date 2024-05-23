
setTimeout(()=>{
    var list = document.querySelectorAll(".ctl-product-link");
    console.log('Lookbook JS',list)
    list.forEach((node)=>{
        let oldHref = node.getAttribute('href');
        let rmParams = oldHref.split("?"); 
        var newHref = rmParams[0].replace("https://15f63f.myshopify.com/","/");
        node.setAttribute("href",newHref)
    });
},1000)


