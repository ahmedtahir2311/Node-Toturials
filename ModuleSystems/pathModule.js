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

// ===============================
