import {gql} from '@apollo/client/core';

export const typeDefs = gql`
    type Query {
        todos: [ToDo]
        todoById(id: ID): ToDo
    }
    
    input ToDoInput {
        id: ID
        title: String
        text: String
    }
    
    type ToDo {
        id: ID
        title: String
        text: String
    }
`;
