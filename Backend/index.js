// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoute from "./routes/contactroute.js";
import enquiryRoute from "./routes/enquiryroute.js";
import sculptureRoutes from "./routes/sculptureRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials
}));


// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use('/api', contactRoute);
app.use('/api', enquiryRoute);
app.use('/api/sculptures', sculptureRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

