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

// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS configuration: Allow frontend requests from the specific URL
app.use(
  cors({
    origin: "https://liyanna-tours-3.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Cookie parser middleware to handle cookies in requests
app.use(cookieParser());

// Routes for user registration, login, and booking creation
app.post("/users", validateUserInformation, addUser);
app.post("/auth/login", loginUser);
app.post("/booking", verifyToken, createBooking);

// Serve the React build files if both frontend and backend are on the same server
// This assumes the build folder is inside the backend directory
app.use(express.static(path.join(__dirname, "client", "build"))); // Adjust path if necessary

// If the route is not API-related, serve the index.html of the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); // Adjust path if necessary
});

// Error handling middleware
app.use(errorHandler);

// Server listens on the dynamic port provided by Render or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
