function buf2hex(buffer) { // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
        //.join('0x')
        .map(x => x.toString(16).padStart(2, '0'))
        .join(' ');
  }
  
  // EXAMPLE:
  const buffer2 = new Uint8Array([ 2, 4, 14, 15 ]);
const buffer = new Uint8Array([ 4, 8, 12, 16 ]);
const buffer3 = buffer.join(buffer2)
console.log(buf2hex(buffer)); // = 04080c10


var bufArr = new ArrayBuffer(4);
var bufView = new Uint8Array(bufArr);

var a = 256
var b = a.toString(16)
bufView.
//bufArr= a.toString(16);


console.log(buf2hex(bufArr));
//console.log(bufArr.map(x=>  x.));
