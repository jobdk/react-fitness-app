import React from "react";
import Profile from "./Profile/Profile";
import { useHistory } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Profiles = ({ profiles, onDelete }) => {
  let history = useHistory();

  return (
    <div>
      <div className="profile-grid-container">
        <div>
          <h3>name</h3>
        </div>
        <div>
          <h3>age</h3>
        </div>
        <div>
          <h3>height</h3>
        </div>
        <div>
          <h3>weight</h3>
        </div>
        <div>
          <h3>sex</h3>
        </div>
        <div></div>
      </div>
      {profiles.map((profile) => (
        <Profile
          key={profile._id}
          profile={profile}
          onDelete={onDelete}
          onEdit={(id) =>
            history.push({
              pathname: "/profile/edit/" + id,
            })
          }
          onSelectProfile={(id) => {
            history.push({
              pathname: "/profile/tracker/" + id,
            });
          }}
        />
      ))}
      <BsFillPlusCircleFill
        className="plus-icon"
        onClick={(id) =>
          history.push({
            pathname: "/profile/add/" + id,
          })
        }
      />
    </div>
  );
};

export default Profiles;
