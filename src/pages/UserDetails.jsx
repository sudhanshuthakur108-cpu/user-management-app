import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleUser } from "../services/userApi";
import "../styles/UserDetails.css";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getSingleUser(id);
    setUser(data);
  };

  return (
    <div className="details-container">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <h2 className="details-title">User Details</h2>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
    </div>
  );
}

export default UserDetails;