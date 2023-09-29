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
  next();
};
const multipart = (req, res, next) => {
  if(req.headers["content-type"]){
  if (req.headers["content-type"].startsWith ('multipart/form-data')){
    if(req.headers["content-type"]===("multipart/form-data"||"multipart/form-data;")){
      return next(res.status(400).json({
        errorCode:102,
        message: "Content Type Error"}))
    }
    else{
     next();
    }
   }else{
    return next(res.status(400).json({
      errorCode:103,
        message: "Content Type Error"}))
   }
  }
   else{
     return next(res
       .status(400)
       .json({ 
        errorCode:101,
        message: "Header Missing"  }));
   }
      };

const headers = {};
headers.app_json = contentType;
headers.multipart=multipart
module.exports = headers;
