export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "todo_add":
      return [...initialState, action.payload];
    case "todo_delete":
      return initialState.filter((item) => item.id != action.payload);
    case "todo_toggle":
     return initialState.map((todo) => {
        if(todo.id === action.payload) {
            return {
                ...todo, 
                done: !todo.done
            }
        }

        return todo;
    })
    default:
      return initialState;
  }
};
