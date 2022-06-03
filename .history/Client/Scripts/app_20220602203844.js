"use strict";
(function () {
    function Start() {
        //email validate
        let submit = document.getElementById("submit");
        submit.onclick=function(){
            
             let email = document.getElementById("email");
             address[1].validity.valueMissing? address[1].setCustomValidity("Please input your address."):address[1].setCustomValidity("");

       
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
