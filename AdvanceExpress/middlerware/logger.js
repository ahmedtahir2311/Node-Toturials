const log = function (req, res, next) {
  console.log("This is Logger Middle ware running ");
  next(); //we need to pass the middle to next on
};

module.exports = { log };
