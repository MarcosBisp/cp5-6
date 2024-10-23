import React, { useEffect, useState } from "react";
import {
  fetchTargets,
  addTarget,
  deleteTarget,
  fetchToDos,
  addToDo,
  deleteToDo,
} from "./api";
import { Target, ToDo } from "./types";
import TargetList from "./components/TargetList";
import TargetForm from "./components/TargetForm";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App: React.FC = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [selectedTargetId, setSelectedTargetId] = useState<number | null>(null);
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const updateTargets = async () => {
    const data = await fetchTargets();
    setTargets(data);
  };

  const loadToDos = async (targetId: number) => {
    const data = await fetchToDos(targetId);
    setToDos(data.filter((todo) => todo.targetId === targetId));
  };

  useEffect(() => {
    updateTargets();
  }, []);

  const handleAddTarget = async (title: string, description: string) => {
    await addTarget(title, description);
    updateTargets();
  };

 
  const handleDeleteTarget = async (id: number) => {
    await deleteTarget(id);
    setSelectedTargetId(null);
    updateTargets();
  };

  
  const handleSelectTarget = (id: number) => {
    setSelectedTargetId(id);
    loadToDos(id);
  };

  
  const handleAddToDo = async (title: string, description: string) => {
    if (selectedTargetId !== null) {
      await addToDo(selectedTargetId, title, description);
      loadToDos(selectedTargetId);
    }
  };

  
  const handleDeleteToDo = async (id: number) => {
    await deleteToDo(id);
    if (selectedTargetId !== null) {
      loadToDos(selectedTargetId);
    }
  };

  return (
    <div className="app">
      <h1>ToDo Targets</h1>

      <TargetForm onAddTarget={handleAddTarget} />
      <TargetList
        targets={targets}
        onSelectTarget={handleSelectTarget}
        onDeleteTarget={handleDeleteTarget}
      />

      {selectedTargetId !== null && (
        <>
          <ToDoForm onAddToDo={handleAddToDo} />
          <ToDoList toDos={toDos} onDeleteToDo={handleDeleteToDo} />
        </>
      )}
    </div>
  );
};

export default App;
