import {makeVar} from '@apollo/client';
import todos from './cards.json';

export const toDosVar = makeVar(todos.cards);
