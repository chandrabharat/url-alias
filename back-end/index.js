import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urlRoute.js";
import redirectRoute from "./routes/redirectRoute.js";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;
const port = process.env.PORT || 3000;

const startServer = () => {
  // Create an instance of Express
  const app = express();

  // Set up middleware
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use("/urls", urlRoutes);
  app.use("/redirect", redirectRoute);

  // Connect to the database
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Start the server
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  return { app, server };
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

const { app, server } = startServer();
export { app, server };
