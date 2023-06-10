import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodorderMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodorderMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show the todo completed", () => {

    todo.done = true

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodorderMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
  

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test('span should call the onToggleTodoMock', () => { 
  
     render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodorderMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);


    expect(onToggleTodoMock).toBeCalledWith(todo.id);

  });

  test('button should call the onDeleteTodorderMock', () => { 
  
     render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodorderMock}
        onToggleTodo={onToggleTodoMock}
      />
    );    

    const btnDeleteElement = screen.getByRole('button')
    fireEvent.click(btnDeleteElement);   
  
    expect(onDeleteTodorderMock).toBeCalledWith(todo.id);
  
  });
  
});
