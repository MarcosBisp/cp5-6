import React, { useState } from "react";
import { addTarget } from "../api";

interface TargetFormProps {
  onUpdate: () => void;
}

const TargetForm: React.FC<TargetFormProps> = ({ onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTarget(title, description);
    setTitle("");
    setDescription("");
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit} className="target-form">
      <input
        type="text"
        placeholder="Target Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Target Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Target</button>
    </form>
  );
};

export default TargetForm;
