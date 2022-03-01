const path = require("path");
// console.log(path);

// =================================PATH BASNAME
// console.log(`${path.basename("C:\\temp\\myfile.html")}`);
// getting the base of any othfile path in any OS other than Window
const base = path.basename("/foo/bar/baz/asdf/quux.html");
// in window it will return the whole path of file
// console.log(base);

// we  will get the base of that path by doing so in window
const baseWin32 = path.win32.basename("/foo/bar/baz/asdf/quux.html");

// console.log(baseWin32)

// A TypeError is thrown if path is not a string or if ext is given and is not a string.

// =============================== Path PArse +++++++++++++++++++++ Best to use
const parse = path.parse("C:\\path\\dir\\file.txt");
// console.log(parse);

// {
//     root: '',
//     dir: '',
//     base: 'C:\\path\\dir\\file.txt',
//     ext: '.txt',
//     name: 'C:\\path\\dir\\file'
//   }

// ====================================================================

// OS Module \

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log("Total Memory = " + totalMemory);
// console.log(`Free Memory = ${freeMemory}`);

// these are simple example with two or more demos we can do many things by using modules. see in documentation

// =======================================================
// FILE SYSTEMS
//---------------------------------file system module--------------

const fs = require("fs");

// every operation comes after  fs.(----) comes in two forms. synchronous and blocking, asynchronous and non blocking.
const files = fs.readdirSync("../");
// console.log(files);
fs.readdir("./", (err, files) => {
  // first argument is an error and second argument is an array of files.
  // if (err) console.log("Error: " + err);
  // else console.log("Result: " + files);
}); //  all the async methods take a function as a last argument. node call this function when the synchronous operation completes.

// ===============================================================
