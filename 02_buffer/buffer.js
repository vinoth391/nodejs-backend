const {Buffer} = require("buffer");
const { log } = require("console");

//const buf = Buffer.alloc(4)
// console.log(buf);


//const buf = Buffer.from("Hello chai")
//console.log(buf);
// console.log(buf.toString());

const bufTwo = Buffer.allocUnsafe(10)
// console.log(bufTwo);

//const buf = Buffer.alloc(10)
//buf.write('Hello')
//console.log(buf.toString());


const buf =Buffer.from("Chai")
console.log(buf);
buf[0] = 0x4A
console.log(buf);
console.log(buf.toString());



