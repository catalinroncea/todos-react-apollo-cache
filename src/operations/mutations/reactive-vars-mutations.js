import {toDosVar} from '../../local-vars';
import {v4 as uuidv4} from 'uuid';

export const addTodo = (todo) => {
    const allTodos = toDosVar();
    const newTodos = [...allTodos, {id: uuidv4(), ...todo}];
    toDosVar(newTodos);
};

export const removeTodo = (id) => {
    const allTodos = toDosVar();
    toDosVar(allTodos.filter(todo => todo.id !== id));
};
