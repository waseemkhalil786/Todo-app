import { useEffect } from "react";

function TodoList({ todos, onDelete, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, ind) => {
        return (
          <div key={todo.id} className="main-div01">
            <h3
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed && "line-through",
                color: todo.completed && "black",
                background: todo.completed && "white",
              }}
            >
              {todo.todo}
            </h3>
            <button className="mybtn1" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        );
      })};
    </div>
  );
}
export default TodoList;
