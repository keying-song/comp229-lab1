const http = require('http');
const fs = require('fs');
const port =3000;
const mime = require('mime-types');


let lookup = mime.lookup;
const server=http.createServer(function(req,res){

  let path = req.url;

   fs.readFile(__dirname+req.url, function(err, data)
   {
      if(err)
      {
         res.writeHead(404);
         console.log(`Error:${err.message}`);
        return res.end(err.message);
      }
      res.writeHead(200);
      console.log(`Data:${data}`);
      return res.end(data);
      
      
   });
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});