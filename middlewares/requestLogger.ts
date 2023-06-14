const requestLogger = (request, response, next) => {
  console.log("request", request);
  next();
};

export default requestLogger;
