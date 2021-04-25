import {toDosVar} from '../../local-vars';
import {v4 as uuidv4} from 'uuid';

export const addTodo = (todo) => {
    const allTodos = toDosVar();
    const newTodos = [...allTodos, {id: uuidv4(), ...todo}];
    toDosVar(newTodos);

    return newTodos;
};

export const removeTodo = (id) => {
    const allTodos = toDosVar();
    toDosVar(allTodos.filter(todo => todo.id !== id));
};

export const getTodo = (id) => {
    return toDosVar().find(item => item.id === id);
}

export const saveTodo = ({id, title, text}) => {
    toDosVar(toDosVar().map(todo => todo.id === id ? {...todo, title, text} : todo));

    return getTodo(id);
};
