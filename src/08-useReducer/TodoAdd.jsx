import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onFormReset } = useForm({
    id: "",
    description: "",
    done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    onFormReset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="¿Qué hay que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Add Todo
      </button>
    </form>
  );
};
