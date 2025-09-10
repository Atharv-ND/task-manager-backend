import Task from "../models/task";
import redisClient from "../utils/redisClient";

export const getAllTask = async () => {
    const cached = await redisClient.getAllTasks();
    if (cached) {
      console.log("📌 Returning tasks from Redis");
      return cached;
    }
    const tasks = await Task.find();
    await redisClient.setAllTasks(tasks);
    return tasks;
}