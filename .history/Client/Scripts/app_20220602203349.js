"use strict";
(function () {
    function Start() {
        //email validate
        let submit = document.getElementById()
        let email = document.getElementById("email");
        if(email.validity.valueMissing){
            email.setCustomValidity("Please input your first name.");
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
