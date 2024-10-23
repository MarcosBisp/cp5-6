import React from "react";
import { Target } from "../types";
import { deleteTarget } from "../api";

interface TargetListProps {
  targets: Target[];
  setSelectedTargetId: (id: number | null) => void;
}

const TargetList: React.FC<TargetListProps> = ({
  targets,
  setSelectedTargetId,
}) => {
  return (
    <div className="target-list">
      <h2>Targets</h2>
      <ul>
        {targets.map((target) => (
          <li key={target.id}>
            <span onClick={() => setSelectedTargetId(target.id)}>
              {target.title}
            </span>
            <button
              onClick={async () => {
                await deleteTarget(target.id);
                setSelectedTargetId(null);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetList;
