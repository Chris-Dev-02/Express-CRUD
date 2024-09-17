import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        require: true
    },
    completedAt: {
        type: Date,
        requiere: false,
    },
}, {
    timestamps: true,
})

export default model('Task', taskSchema)