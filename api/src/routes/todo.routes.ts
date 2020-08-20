import { Router } from 'express';
import { controller } from '../controller/todos.controller';
const router = Router();

const todo = new controller();

router.route('/')
    .get(todo.getAll)
    .post(todo.add)

router.route('/:id')
    .get(todo.getOne)

router.route('/delete/:id')
    .delete(todo.delete);

router.route('/update/:id')
    .put(todo.update);

router.route('/change/:id')
    .put(todo.changeState);

export default router;