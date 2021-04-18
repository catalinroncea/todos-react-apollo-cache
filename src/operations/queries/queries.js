import {gql} from '@apollo/client/core';

export const GET_ALL_TODOS = gql`
    query GetAllTodos {
        todos @client {
            id
            title
            text
        }
    }
`;

export const GET_TODO_BY_ID = gql`
    query GetTodoById($id: ID!) {
        todo(id: $id) @client {
            id
            title
            text
        }
    }
`;
