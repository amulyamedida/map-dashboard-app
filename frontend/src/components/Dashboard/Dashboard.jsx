import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-card-container">
        {[1, 2, 3].map((id) => (
          <div key={id} onClick={() => navigate("/map")} className="dashboard-card">
            Card {id}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
