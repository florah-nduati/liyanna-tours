import { PrismaClient } from "@prisma/client";
import mailjet from "node-mailjet";

const prisma = new PrismaClient();

const mailjetClient = mailjet.apiConnect(
  "ca68b96e9f67feb2145247aced609b8e",
  "a510e551c1c62961d0ba1db5b002356e",
);
export const createBooking = async (req, res) => {
  try {
    console.log("Booking request received:", req.body);

    const {
      name,
      email,
      date,
      people,
      packageType,
      tourType,
      paymentOption,
      message,
    } = req.body;

    const userId = req.userId;

    let user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { name, email },
      });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        date: new Date(date),
        people,
        packageType,
        tourType,
        paymentOption,
        message,
      },
    });

    console.log("Booking created successfully:", booking);

    res.status(201).json({ success: true, booking });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
