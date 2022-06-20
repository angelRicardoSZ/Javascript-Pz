const fs = require("fs");
const stream = require("Stream")
const util = require("util")
let data = "";

let readebleStream = fs.createReadStream(__dirname + "/input.txt");
readebleStream.setEncoding("UTF8")
// readebleStream.on("data", function(chunk){
//     // console.log(chunk)
//     data += chunk
// })

// readebleStream.on("end", function(){
//     console.log(data);
// })


// process.stdout.write("hola")
// process.stdout.write("que")
// process.stdout.write("tal")

const Transform = stream.Transform;

class Mayus extends Transform {
      constructor() {
            super();
            Transform.call(this);
      }
      _transform = (chunk, codif, cb) => {
            let chunkMayus = chunk.toString().toUpperCase();
            this.push(chunkMayus);
            cb();
      };
}
const mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);