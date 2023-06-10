export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  return (
    <li
      className="list-group-item d-flex justify-content-between"
    >
      <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggleTodo(todo.id)}
            />
      <span 
        className={`align-self-center ${ (todo.done) ? "text-decoration-line-through" : ""}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button 
        type="button" 
        className="btn btn-outline-danger" 
        onClick={ () => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};
