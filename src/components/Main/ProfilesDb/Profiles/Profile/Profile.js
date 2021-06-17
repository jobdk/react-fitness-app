import { BsPencilSquare, BsTrash } from "react-icons/bs";

const Profile = ({ profile, onDelete, onUpdate }) => {
  /*
{
    "name": "Me",
    "age": 66,
    "height": 200,
    "weight": 70,
    "sex": 1,
    "userId": "6009590ae432bda6a283446d"
}
*/

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
        <h3>{profile.sex}</h3>
      </div>
      <div>
        <h3>
          <span>
            <BsPencilSquare
              onClick={() => {
                onUpdate(profile._id);
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
    </div>
  );
};

export default Profile;
