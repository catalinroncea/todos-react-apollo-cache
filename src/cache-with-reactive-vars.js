import {InMemoryCache} from '@apollo/client/cache';
import {toDosVar} from './local-vars';

export const cacheWithReactiveVars = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                todos: {
                    read() {
                        return toDosVar();
                    }
                },
                todo: {
                    read(name, {variables}) {
                        return toDosVar().find(todo => todo.id === variables.id);
                    }
                }
            }
        }
    }
});
