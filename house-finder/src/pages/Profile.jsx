import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const navigate = useNavigate();

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
    </div>
  );
};

export default Profile;
