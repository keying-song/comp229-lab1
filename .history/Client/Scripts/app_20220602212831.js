"use strict";
(function () {
    function Start() {
        //email validate
        let submit = document.getElementById("submit");
        let reset = document.getElementById("reset");
        submit.onclick=function(){
             let error = document.getElementById("error");
             var emailInput = document.getElementById("email").value;
             var emailInput = document.getElementById("email").value;
            var emailReg =/^\w+@\w+\.\w+.*$/;
            if(! emailReg.test(emailInput)){
            errorSign[8].style.display="inline-block";
            errors[8].innerHTML = "invalid email";
            passSign[8].style.display="none";
            }else{
            passSign[8].style.display="inline-block";
             errorSign[8].style.display="none";
            errors[8].innerHTML = " ";
            }

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
