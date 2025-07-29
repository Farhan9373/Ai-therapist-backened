import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import mongoose, { Types } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as any;
    console.log("Decoded JWT:", decoded);

    const user = await User.findById(decoded.userId);
    if (!user) {
      console.log("User not found for ID:", decoded.userId);
      return res.status(401).json({ message: "User not found" });
    }

    req.user = { id: user._id.toString() };
    console.log("Authenticated user:", req.user);
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Invalid authentication token" });
  }
};
