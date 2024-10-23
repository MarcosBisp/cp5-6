import React, { useState } from "react";

interface ToDoFormProps {
  onAddToDo: (title: string, description: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAddToDo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToDo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add ToDo</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        minLength={3}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        minLength={3}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default ToDoForm;
