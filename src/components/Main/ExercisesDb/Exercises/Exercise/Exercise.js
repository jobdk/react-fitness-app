import React from "react";
import { BsPencilSquare, BsTrash, BsFillPlusCircleFill } from "react-icons/bs";

export const Exercise = ({ exercise, onEdit, onDelete, isTracker, onAdd }) => {
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

      {isTracker ? (
        <div>
          <BsFillPlusCircleFill
            className="plus-icon"
            onClick={() => onAdd(exercise)}
          />
        </div>
      ) : (
        <div>
          <h3>
            <span>
              <BsPencilSquare
                onClick={() => {
                  onEdit(exercise._id);
                }}
              />
            </span>
            <span>
              <BsTrash
                onClick={() => {
                  onDelete(exercise._id);
                }}
              />
            </span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Exercise;
