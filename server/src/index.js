import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { addUser } from "./controllers/userController.js";
import { loginUser } from "./controllers/authController.js";
import { createBooking } from "./controllers/bookingController.js";
import errorHandler from "./middleware/errorHandler.js";
import validateUserInformation from "./middleware/validateUserInformation.js";
import verifyToken from "./middleware/verifyToken.js";
import { SitemapStream } from "sitemap"; // Import SitemapStream from sitemap package
import { PrismaClient } from "@prisma/client"; // Import Prisma for database access
const prisma = new PrismaClient();

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

// Sitemap route to serve the sitemap.xml dynamically
app.get("/sitemap.xml", async (req, res) => {
  try {
    // Create a new SitemapStream instance with your website hostname
    const sitemap = new SitemapStream({ hostname: "https://liyanna-tours.onrender.com" });

    // Add static pages to the sitemap
    sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
    sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
    sitemap.write({ url: "/tours", changefreq: "daily", priority: 0.8 });

    // Fetch dynamic pages from the database (e.g., tour pages)
    const tours = await prisma.tour.findMany(); // Assuming you have a "tour" table in your Prisma schema
    tours.forEach((tour) => {
      sitemap.write({
        url: `/tours/${tour.id}`,
        changefreq: "daily",
        priority: 0.7,
      });
    });

    // End the sitemap and send it to the response
    sitemap.end();
    res.header("Content-Type", "application/xml");
    sitemap.pipe(res);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
});

app.use(errorHandler);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
