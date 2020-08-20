import TodoSchema from '../database/models/todo.model';
import { Response, Request } from 'express'

export class controller {
    constructor() {}

    async getAll(req: Request, res: Response) {
        const todos = await TodoSchema.find();
        res.status(200).json(todos);
    }

    async getOne(req: Request, res: Response) {
        const todo = await TodoSchema.findById(req.params.id);
        res.status(200).json(todo);
    }

    async add(req: Request, res: Response) {
        const { task } = req.body;
        const todo = new TodoSchema({task});
        await todo.save();
        res.status(205).json(todo); 
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const todo = await TodoSchema.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Successfully Deleted',
            todo
        })
    }

    async update(req: Request, res: Response) {
        const { task } = req.body;
        const { id } = req.params;
        
        const todo = await TodoSchema.findByIdAndUpdate(id, {task}, {new: true});
        res.status(200).json({
            message: 'successfully updated',
            todo
        });
    }

    async changeState(req: Request, res: Response) {
        const { id } = req.params;
        const todo = await TodoSchema.findById(id);
        if(todo) {
            todo.done = !todo.done;
            await todo.save();
            res.json(todo);
        } else {
            res.json({
                message: 'this todo does not exist'
            });
        }
    }
}