import {cacheWithLocalFields} from '../../cache-with-local-fields';
import {GET_ALL_TODOS, GET_TODO_BY_ID} from '../queries/queries';
import {v4 as uuidv4} from 'uuid';

export const addTodo = (todo) => {
    const {todos} = cacheWithLocalFields.readQuery({query: GET_ALL_TODOS}) || {todos: []};

    const newTodo = {...todo, __typename: 'Todo', id: uuidv4()};
    cacheWithLocalFields.writeQuery({
        query: GET_ALL_TODOS,
        data: {
            todos: [...todos, newTodo]
        }
    });

    return newTodo;
};

export const removeTodo = (id) => {
    const {todos} = cacheWithLocalFields.readQuery({query: GET_ALL_TODOS}) || {todos: []};
    cacheWithLocalFields.writeQuery({
        query: GET_ALL_TODOS,
        data: {
            todos: todos.filter(todo => todo.id !== id)
        }
    });
    cacheWithLocalFields.evict({ id: `Todo:${id}`});
    cacheWithLocalFields.gc();
};

export const saveTodo = ({id, title, text}) => {
    const newTodo = {
        __typename: 'Todo',
        id,
        title,
        text
    };
    cacheWithLocalFields.writeQuery({
        query: GET_TODO_BY_ID,
        data: {
            todo: newTodo
        },
        variables: {
            id
        }
    });

    return newTodo;
};
