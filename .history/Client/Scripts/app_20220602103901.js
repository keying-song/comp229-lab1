"use strict";
(function () {
    function Start() {
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

            var con = document.querySelector(".nav-link");
            con[1].onclick = function(){
                navicon[1].style.background-color = "white";
            }



        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map