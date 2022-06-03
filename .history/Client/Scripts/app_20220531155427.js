(function(){

    function Start()
    {
        console.log("app started!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        XHR.open("GET","../D")
    }
    window.addEventListener("load", Start);
})();