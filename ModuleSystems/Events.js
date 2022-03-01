// const EventEmitter = require("events");
//it is a class that why the first letter will be bigger
// const emitter = new EventEmitter(); //it is a object of that that class
// console.log(emitter);

// emit; // making a noice or happening a event
// //Reguister a listenner
// emitter.on("messageLoged", function () {
//   console.log("listener called");
// });

// // Rasied a event
// emitter.emit("messageLoged");

// =================== Event arguments

const EventEmitter = require("events");
const emitter = new EventEmitter();
// console.log(emitter);

// emit; // making a noice or happening a event
//Reguister a listenner
emitter.on("messageLoged", function (arg) {
  //   console.log("listener called", arg);
});

// Rasied a event
emitter.emit("messageLoged", {
  id: "1",
  url: "Https//",
}); // it is a better practice to send a object in the arguments

// ===================Practice for logging event

const LoggerEmitter = require("events");

const logger = new LoggerEmitter();

logger.on("Login", function (arg) {
  if (arg.username == "ahmedtahir2311" && arg.password == "123456") {
    console.log("Successful Login", arg);
  } else {
    console.log("Successful Failed", arg);
  }
});

logger.emit("Login", { username: "ahmedtahir2311", password: "123456" });
