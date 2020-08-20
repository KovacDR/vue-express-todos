import { Schema, model } from 'mongoose';
import { Todo } from './todo.interface';

const todoSchema = new Schema<Todo> ({

    task!: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    done!: {
        type: Boolean,
        default: false
    }

});

export default model<Todo>('Todo', todoSchema);