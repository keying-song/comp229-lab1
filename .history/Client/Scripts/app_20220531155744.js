(function(){

    function Start()
    {
        console.log("app started!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        //create the request
        XHR.open("GET","../data/data.json");
        //send the request
    }
    window.addEventListener("load", Start);
})();