const http = require('http');
const fs = require('fs');
const port =3000;
const mime = require('mime-types');


let lookup = mime.lookup;
const server=http.createServer(function(req,res){

  let path = req.url;
  if(path =="/" || path =="/home")
  {
     path = "/index.html";

  }
  let mime_type = lookup(path.substring(1));
  console.log(`Mine Type: ${mime_type}`);
   fs.readFile(__dirname+path, function(err, data)
   {
      if(err)
      {
         res.writeHead(404);
         console.log(`Error:${err.message} 404 `);
        return res.end(err.message);
      }
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.writeHead(200, {'Content-Type`: mime-type})
      console.log(`Data:${data}`);
      return res.end(data);
      
      
   });
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});