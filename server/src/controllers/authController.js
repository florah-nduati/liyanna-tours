import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const client = new PrismaClient();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await client.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({ message: "Login successful", user });
  } catch (e) {
    console.error("Error logging in:", e);
    res.status(500).json({ message: "Something went wrong", error: e.message });
  }
};
