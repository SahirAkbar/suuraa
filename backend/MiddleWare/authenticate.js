const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

async function authenticateToken(req, res, next) {
  try {
    
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }
    
    let user =await jwt.verify(token, "shhhhh");
    
    if (!user) {
      return res.status(401).json({message:'invalid Token'})
    }
    let userRecord = await UserModel.findByPk(user.id)
     
      // Attach the user object to the request for further processing
      req.user = userRecord;
      next();
  } catch (error) {
    console.log(error)
    next(error)
  }
   
}

module.exports = authenticateToken;
