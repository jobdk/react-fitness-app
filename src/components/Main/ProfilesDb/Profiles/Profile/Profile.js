import { BsPencilSquare, BsTrash } from "react-icons/bs";

const Profile = ({ profile, onDelete, onEdit, onSelectProfile }) => {
  return (
    <div className="profile-grid-container">
      <div>
        <h3>{profile.name}</h3>
      </div>
      <div>
        <h3>{profile.age}</h3>
      </div>
      <div>
        <h3>{profile.height}</h3>
      </div>
      <div>
        <h3>{profile.weight}</h3>
      </div>
      <div>
        <h3>{profile.sex === 0 ? "male" : "female"}</h3>
      </div>
      <div>
        <h3>
          <span>
            <BsPencilSquare
              onClick={() => {
                onEdit(profile._id);
              }}
            />
          </span>
          <span>
            <BsTrash
              onClick={() => {
                onDelete(profile._id);
              }}
            />
          </span>
        </h3>
      </div>
      <div>
        <span onClick={() => onSelectProfile(profile._id)}>
          <h3>track</h3>
        </span>
      </div>
    </div>
  );
};

export default Profile;
