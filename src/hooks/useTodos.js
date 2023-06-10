import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const todosCount = todos.length;
    //  const completedTodosCount = todos.filter(todo => todo.done === true).length;
    const pendingTodosCount = todos.filter(todo => todo.done === false).length;

  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
        type: 'todo_add',
        payload: todo
    }

    dispatch(action);
  };

  const handleDeleteTodo = ( id ) => {
    dispatch({
        type: 'todo_delete',
        payload: id
    });
  }

  const handleToggleTodo = ( id ) => {    
    dispatch({
        type: 'todo_toggle',
        payload: id
    })
  }

  return {
    ...todos,
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
