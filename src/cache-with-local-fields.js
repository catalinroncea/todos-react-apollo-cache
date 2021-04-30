import {InMemoryCache} from '@apollo/client/cache';

export const cacheWithLocalFields = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                todos: {
                    read(todos) {
                        return todos || [];
                    }
                }
            }
        }
    }
});
