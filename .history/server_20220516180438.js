const http = require('http');
const fs = require('fs');
const port =3000;
const server=http.createServer(function(req,res){
   fs.readFile(__dirname+req.url, function(err, data)
   {
      if(err)
      {
         res.writeHead(404);
         red.end(err.message);
      }
      res.writeHead()
      
   });
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});