(function(){

    function Start()
    {
        console.log("app started!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        XHR.open("GET","../DAT")
    }
    window.addEventListener("load", Start);
})();