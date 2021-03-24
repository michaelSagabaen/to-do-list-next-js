import { createContext } from 'react';

const TodosContext = createContext();

export const TodosProvider = TodosContext.Provider;

export default TodosContext;
