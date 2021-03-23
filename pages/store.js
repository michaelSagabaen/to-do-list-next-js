import { useContext, createContext } from "react";

const TodosContext = createContext();
const TodoContext = createContext();

export const TodosProvider = TodosContext.Provider
export const TodoProvider = TodoContext.Provider

export default TodosContext