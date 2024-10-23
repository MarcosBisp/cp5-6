import React, { useEffect, useState } from "react";
import TargetForm from "./components/TargetForm";
import ToDoForm from "./components/ToDoForm";
import TargetList from "./components/TargetList";
import { fetchTargets } from "./api";
import { Target } from "./types";

const App: React.FC = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [selectedTargetId, setSelectedTargetId] = useState<number | null>(null);

  const updateTargets = async () => {
    const data = await fetchTargets();
    setTargets(data);
  };

  useEffect(() => {
    updateTargets();
  }, []);

  return (
    <div className="app">
      <h1>Targets</h1>
      <TargetForm onUpdate={updateTargets} />
      <TargetList targets={targets} setSelectedTargetId={setSelectedTargetId} />
      {selectedTargetId !== null && (
        <ToDoForm targetId={selectedTargetId} onUpdate={updateTargets} />
      )}
    </div>
  );
};

export default App;
