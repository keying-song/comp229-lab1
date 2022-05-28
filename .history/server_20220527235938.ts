import http from 'http';
import fs from 'fs';
const port =3000;
import mime from 'mime-types';


let lookup = mime.lookup;
const server=http.createServer(function(req,res){

  let path = req.url as string;
  if(path =="/" || path =="/home")
  {
     path = "/index.html";

  }
  let mime_type = lookup(path.substring(1)) as string;
  console.log(`Mime Type: ${mime_type}`);
   fs.readFile(__dirname+path, function(err, data)
   {
      if(err)
      {
         res.writeHead(404);
         console.log(`Error:${err.message} 404 `);
        return res.end(err.message);
      }
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.writeHead(200, {'Content-Type': mime_type});
      //console.log(`Data:${data}`);
      return res.end(data);
      
      
   });
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});