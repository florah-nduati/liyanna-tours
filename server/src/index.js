import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { addUser } from "./controllers/userController.js";
import { loginUser } from "./controllers/authController.js";
import { createBooking } from "./controllers/bookingController.js";
import errorHandler from "./middleware/errorHandler.js";
import validateUserInformation from "./middleware/validateUserInformation.js";
import verifyToken from "./middleware/verifyToken.js";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "https://liyanna-tours-3.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

// API Routes
app.post("/users", validateUserInformation, addUser);
app.post("/auth/login", loginUser);
app.post("/booking", verifyToken, createBooking);

// Serve React app from dist (adjusted path)
app.use(express.static(path.join(__dirname, "../client", "dist")));

// React catch-all for SPA routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});

// Error handling middleware
app.use(errorHandler);

// Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
