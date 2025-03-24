import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = ({ setToken }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("https://map-dashboard-app.onrender.com/api/auth/login", form);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input type="text" placeholder="Username" 
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="login-input"
        />
        <input type="password" placeholder="Password" 
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
