import express from "express";
import cors from "cors";
//import { requireAuth } from "@clerk/express";
import taskRoutes from "./routes/taskRoute";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/task', taskRoutes);

export default app;
