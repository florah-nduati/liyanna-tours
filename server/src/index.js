import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { addUser } from "./controllers/userController.js";
import { loginUser } from "./controllers/authController.js";
import { createBooking } from "./controllers/bookingController.js";
import errorHandler from "./middleware/errorHandler.js";
import validateUserInformation from "./middleware/validateUserInformation.js";
import verifyToken from "./middleware/verifyToken.js";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["https://liyanna-tours.onrender.com", "https://liyanna-tour.onrender.com"], 
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});


app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Liyanna Luxury Tours API!");
});


app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
  });
});


app.post("/users", validateUserInformation, addUser);
app.post("/auth/login", loginUser);
app.post("/booking", verifyToken, createBooking);


app.use(errorHandler);


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
