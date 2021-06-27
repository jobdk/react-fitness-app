import React from "react";
import { BsPencilSquare, BsTrash, BsFillPlusCircleFill } from "react-icons/bs";

const Food = ({ food, onEdit, onDelete, isTracker, onAdd }) => {
  return (
    <div className="food-grid-container">
      <div>
        <h3>{food.name}</h3>
      </div>
      <div>
        <h3>{food.baseAmount}</h3>
      </div>
      <div>
        <h3>{food.energy}</h3>
      </div>
      <div>
        <h3>{food.fat}</h3>
      </div>
      <div>
        <h3>{food.carbohydrates}</h3>
      </div>
      <div>
        <h3>{food.protein}</h3>
      </div>
      {isTracker ? (
        <div>
          <BsFillPlusCircleFill
            className="plus-icon"
            onClick={() => onAdd(food)}
          />
        </div>
      ) : (
        <div>
          <h3>
            <span
              onClick={() => {
                onEdit(food._id);
              }}
            >
              <BsPencilSquare />
            </span>
            <span
              onClick={() => {
                onDelete(food._id);
              }}
            >
              <BsTrash />
            </span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Food;
