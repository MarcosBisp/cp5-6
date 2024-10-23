import React from "react";
import { ToDo } from "../types";
import { FaTrashAlt } from "react-icons/fa";

interface ToDoListProps {
  toDos: ToDo[];
  onDeleteToDo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos, onDeleteToDo }) => {
  return (
    <div className="todo-list">
      <h2>ToDos</h2>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onDeleteToDo(todo.id)} className="trash-btn">
              <FaTrashAlt size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
