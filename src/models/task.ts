import mongoose, { Document, Schema } from "mongoose";
import { model , models } from "mongoose";

export interface ITask extends Document {
  user_id: string;
  title: string;
  description: string;
  category: string;
  start_date: Date;
  deadline: Date;
  hours_reqd: number;
  status: "Pending" | "In-Progress" | "Completed";
  priority: number;
  days: string[];
  hours_rem: number;
  time_quanta: number;
  start_time: Date | null;
  end_time: Date | null;
}

const TaskSchema: Schema = new Schema<ITask>(
  {
    user_id: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    category: { type: String, default: "general" },
    start_date: { type: Date, default: Date.now },
    deadline: { type: Date },
    hours_reqd: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Pending", "In-Progress", "Completed"],
      default: "Pending",
    },
    priority: { type: Number, default: 1 },
    days: { type: [String], default: [] },
    hours_rem: { type: Number, default: 0 },
    time_quanta: {type: Number , default: 0},
    start_time: {type: Date, default: null},
    end_time: {type: Date, default: null}
  }
);

const Task = models.Task || model<ITask>("Task", TaskSchema);

export default Task;
