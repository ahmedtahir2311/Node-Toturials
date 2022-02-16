function a(name) {
  console.log("hello " + name);
  console.log(this.global);
}

a("ahmed");

//Window is not in Node .... it has global
console.log(); // global object

//   clearInterval:
//   clearTimeout:
//   setTimeout:
// setInterval

// var message = "";

// console.log(global.message); // not global object due to modular system
