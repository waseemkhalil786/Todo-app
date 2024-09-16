import { useEffect } from "react";

function TodoList({ todos, onDelete, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, ind) => {
        return (
          <div key={todo.id} className="main-div01">
            <h3
              style={{
                background:"white",
                height:'30px',
                textAlign:"center",
                borderRadius:'5px',
                display:'flex',
                alignItems:'center',
                padding:'5px'
              }}
            >
              {todo.todo}
            </h3>
            <button className="mybtn1" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
