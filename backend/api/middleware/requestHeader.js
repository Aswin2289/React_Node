const contentType = (req, res, next) => {
  if (req.headers["content-type"]) {
    if (req.headers["content-type"] === "application/json") {
      next();
    } else {
      return res.status(400).json({
        errorCode: "100",
        message: "Not Available",
      });
    }
  } else {
    return res.status(400).json({
      errorCode: "101",
      message: "header Missing",
    });
  }
};

const headers = {};
headers.app_json = contentType;

module.exports = headers;
