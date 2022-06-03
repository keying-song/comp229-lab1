"use strict";
//Keying Song 301166693
//IIFE
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
        });
    }
    window.addEventListener("load", Start);
})();
//email validation
function EmailValidate(){
    let emailInput = document.getElementById("email").value;
    let error = document.getElementById("error");
    let emailReg =/^\w+@\w+\.\w+.*$/;
    if(! emailReg.test(emailInput)){
    
    error.innerHTML = "invalid email";
  
    }else{
      error.innerHTML = " ";
    }
  }
  //reset
  function ResetF(){
      let error = document.getElementById("error");
      error.innerHTML = " ";
  }
//set cookie
function CreateCookies(){
    let name = document.getElementById("name");
    let email = document.getElem

}
