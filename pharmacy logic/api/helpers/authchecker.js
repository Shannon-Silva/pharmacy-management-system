var jwt = require('jsonwebtoken');

const SECRET = "JSONWEBTOKEN";

module.exports.authenticator = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-pharmacy-accesstoken'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, SECRET, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.', err: err });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
}