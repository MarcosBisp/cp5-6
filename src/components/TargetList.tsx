import React from "react";
import { Target } from "../types";
import { FaArrowCircleDown, FaTrashAlt } from "react-icons/fa";

interface TargetListProps {
  targets: Target[];
  onSelectTarget: (id: number) => void;
  onDeleteTarget: (id: number) => void;
}

const TargetList: React.FC<TargetListProps> = ({
  targets,
  onSelectTarget,
  onDeleteTarget,
}) => {
  return (
    <div className="target-list">
      <h2>Targets</h2>
      <ul>
        {targets.map((target) => (
          <li key={target.id} className="target-item">
            <span>{target.title}</span>
            <div>
              <button onClick={() => onSelectTarget(target.id)}>
                <FaArrowCircleDown size={18} />
              </button>
              <button onClick={() => onDeleteTarget(target.id)} className="trash-btn">
                <FaTrashAlt size={18}/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetList;
