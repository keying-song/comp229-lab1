"use strict";
(function () {
    function Start() {
        let a=document.getElementsByTagName("li");
        for(let i = 0; i < a.length; i++){

            a[i].onmouseup = function(){
                if (a.style.back){
                     a[i].className = "active";
                }else{
                    a[i].className = "nav-item";
                }
             
            };
        } 
       
        console.log("app started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON DATE:");
                console.log("==============");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map
