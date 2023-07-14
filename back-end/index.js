import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urlRoute.js";
import redirectRoute from "./routes/redirectRoute.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  // Create an instance of Express
  const app = express();

  const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  // Set up middleware
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use("/urls", urlRoutes);
  app.use("/redirect", redirectRoute);

  return connectDB().then(() => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    return { app, server };
  });
};

export const stopServer = async (server) => {
  try {
    await server.close();
    console.log("Server stopped");
  } catch (error) {
    console.error("Failed to stop the server:", error);
    throw error;
  }
};

const { app, server } = await startServer();
export { app, server };
