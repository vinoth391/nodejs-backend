console.log("start the script");

fs.readFile('section_2/notes.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("end script");

const http = require('node:http')

const server = http.createServer(function (req, res){
    console.log(' I got an Incoming request');


    res.writeHead(200);
    res.end('Thanks for visiting my server : ')
})

server.listen(8000, function() {
    console.log('server running 8000');
    
})
