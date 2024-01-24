const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);
  //   res.send("Testing");
  next(); //when using middleware, we must call next() to move to the next middleware
};

module.exports = logger;
