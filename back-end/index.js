import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import urlRoutes from "./routes/urlRoute.js";
import redirectRoute from "./routes/redirectRoute.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
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

  app.use(express.json());
  app.use(cors());

  // Serve static files from the "public" directory
  app.use(express.static(path.resolve(process.cwd(), "public")));

  // Route for the root URL
  app.get("/", (req, res) => {
    // Send the static HTML file as the response
    res.sendFile(path.resolve(process.cwd(), "public", "index.html"));
  });

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
