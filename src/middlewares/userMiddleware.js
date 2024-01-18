const bearer = require("bearer");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
    try {
      const { authorization = "" } = req.headers;
      const [bearer, token] = authorization.split(" ");
      console.log(token, bearer);
      if (!token) {
        return res.status(401).json({ message: "not authorize" });
      }
      const decoded = await jwt.verify(token, process.env.JWT_KEY);
      const user = await User.findById(decoded.userId);
  
      if (!user || token !== user.token) {
        console.log("Invalid token or user not found");
        return res.status(401).json({ message: "noT authorize" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error("Error in checkToken:", error.message);
      return res.status(401).json({ message: "Not authorized" });
    }
  };
  
  const current =  (req, res, next) => {
    try {
      if (!req.user || !req.user.email || !req.user.role) {
        console.log("Invalid user data", req.user);
        return res.status(401).json({ message: "Not authorized" });
      }
      currentUser = {
        email: req.user.email,
        role: req.user.role,
      };
  
      res.status(200).json(currentUser);
      next();

    } catch (error) {
      console.error("Error in currentUser:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


  module.exports = {
    current,
    checkToken,
  };
  