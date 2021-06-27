import React from "react";
import Exercise from "./Exercise/Exercise";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Exercises = ({ exercises, onDelete, isTracker, onAdd }) => {
  let history = useHistory();

  return (
    <div>
      <div className="exercise-grid-container">
        <div>
          <h3>name</h3>
        </div>
        <div>
          <h3>base time</h3>
        </div>
        <div>
          <h3>energy burned</h3>
        </div>
        <div></div>
      </div>
      {exercises.map((exercise) => (
        <Exercise
          key={exercise._id}
          exercise={exercise}
          onDelete={onDelete}
          onEdit={(id) =>
            history.push({
              pathname: "/exercise/edit/" + id,
            })
          }
          isTracker={isTracker}
          onAdd={onAdd}
        />
      ))}
      {isTracker ? (
        ""
      ) : (
        <BsFillPlusCircleFill
          className="plus-icon"
          onClick={(id) =>
            history.push({
              pathname: "/exercise/add/",
            })
          }
        />
      )}
    </div>
  );
};

export default Exercises;
