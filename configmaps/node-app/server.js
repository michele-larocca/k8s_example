const http = require('http');
const fs = require('fs');

const handler = (request, response) => {
  fs.readFile('/etc/config/enemies.cheat.level', 'UTF-8', (err, fileData) => {
    if(err){
      console.log(err);
      return;
    }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("'ENEMIES' (from env variable): " + process.env.ENEMIES + '<br>');
      response.write("'enemies.cheat.level' (from volume): " + fileData + '<br>');
      response.end();
    }
  });
};

const server = http.createServer(handler);
server.listen(9000);