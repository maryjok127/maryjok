
(function() {
    function asyncLoad() {
        var urls = ["https://shopify.shopthelook.app/shopthelook.js?shop=15f63f.myshopify.com&widget=1&mainProductId=9005019693378"];
        for (var i = 0; i < urls.length; i++) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = urls[i];
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
    };
    if(window.attachEvent) {
        window.attachEvent('onload', asyncLoad);
    } else {
        window.addEventListener('load', asyncLoad, false);
    }
})();
