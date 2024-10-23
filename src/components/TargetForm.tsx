import React, { useState } from "react";

interface TargetFormProps {
  onAddTarget: (title: string, description: string) => void;
}

const TargetForm: React.FC<TargetFormProps> = ({ onAddTarget }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTarget(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Target</h2>
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
      <button type="submit">Add Target</button>
    </form>
  );
};

export default TargetForm;
