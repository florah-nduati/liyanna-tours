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
    origin: [
      "https://liyanna-tours.onrender.com",
      "http://localhost:5173",
      //"https://liyanna-tour.onrender.com",
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(cookieParser());

app.post("/users", validateUserInformation, addUser);
app.post("/auth/login", loginUser);
app.post("/booking", verifyToken, createBooking);

app.use(errorHandler);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
