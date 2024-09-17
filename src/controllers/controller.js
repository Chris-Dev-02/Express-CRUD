import Task from "../models/task.js";

export const controller = {}

controller.tasksList = async (req, res) => {
    try{
        const task = await Task.find({});
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

controller.getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

controller.addTask = async (req, res) => {
    try{
        const {title, description} = req.body;
        const newTask = new Task({title, description});
        console.log(newTask);
        await newTask.save();
        res.status(201).json({newTask});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

controller.updateTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body);

        if(!task){
            return res.status(404).json({message: "Project not found"});
        }

        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

controller.deleteTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if(!task){
            return res.status(404).json({message: "Project not found"});
        }

        res.status(200).json({message: "Project deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}