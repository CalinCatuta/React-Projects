import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const navigate = useNavigate();

  const onSubmitHan = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update name in firebase
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error("Could not update profile details");
    }
  };
  const onChangeHan = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onLogoutHan = (e) => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogoutHan}>
          Logout
        </button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmitHan();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={name}
              onChange={onChangeHan}
            />
            <input
              type="text"
              id="email"
              className="profileEmail"
              disabled={true}
              value={email}
              onChange={onChangeHan}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
