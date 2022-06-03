(function(){

    function Start()
    {
        console.log("app started!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        //create the request
        XHR.open("GET","../data/data.json");
        //send the request
        XHR.send();
        //create an event listener/handler
        XHR.addEventListener("readvstatechange".func)
    }
    window.addEventListener("load", Start);
})();