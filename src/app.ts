import express from "express";
import cors from "cors";
//import { requireAuth } from "@clerk/express";
import taskRoutes from "./routes/taskroute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/task', taskRoutes);

export default app;
