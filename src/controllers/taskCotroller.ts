import {Request, Response} from "express";
import {getAllTask} from "../services/taskService";

export const getAllTaskController = async (req: Request, res: Response) => {
    try{
        const tasks = await getAllTask();
        return res.status(200).json(tasks);
    }catch (error) {
        res.status(500).json({message: "Error fetching tasks", error});
    }
}