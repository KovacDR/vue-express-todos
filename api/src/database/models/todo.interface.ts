import Mongoose from "mongoose";

export interface Todo extends Mongoose.Document {
    task: string;
    done: boolean;
}