// const logger = require("./logger");

function Emitter(data) {
  console.log(`Listening to the Port ${data}`);
}

// logger.emitter.on("listenToPort", Emitter);

// logger.Logger("Hello World");

// ========================================//Other method=======================
const Logger = require("./logger");

const logger = new Logger();

logger.on("listenToPort", Emitter);

logger.log("Hello World");
