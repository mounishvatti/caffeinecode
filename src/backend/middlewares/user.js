import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

function userMiddleware(req, res, next) {
    const token = req.cookies.token; // Get JWT from cookie
  
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided" });
    } else {
      try {
        const decoded = jwt.verify(token, process.env.JWT_USER_PASSWORD);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
      }
    }
}

export { userMiddleware };