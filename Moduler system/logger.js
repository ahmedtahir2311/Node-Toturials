// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// function Logger(message) {
//   console.log("message is " + message);

//   emitter.emit("listenToPort", { id: 1, PortNo: 3000 });
// }

// module.exports = { emitter, Logger };

// ?=============================Other Method==================

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log("message is " + message);
    this.emit("listenToPort", { id: 1, PortNo: 3000 });
  }
}

module.exports = Logger;
