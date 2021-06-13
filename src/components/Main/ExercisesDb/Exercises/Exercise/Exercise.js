import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

export const Exercise = ({ exercise, onDelete, onEdit }) => {
  return (
    <div className="exercise-grid-container">
      <div>
        <h3>{exercise.name}</h3>
      </div>
      <div>
        <h3>{exercise.baseTime}</h3>
      </div>
      <div>
        <h3>{exercise.energyBurned}</h3>
      </div>
      <div>
        <h3>
          <span
            onClick={() => {
              onEdit(exercise._id);
            }}
          >
            <BsPencilSquare />
          </span>
          <span
            onClick={() => {
              onDelete(exercise._id);
            }}
          >
            <BsTrash />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Exercise;
