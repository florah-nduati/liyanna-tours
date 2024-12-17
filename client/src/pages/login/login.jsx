import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import useUserStore from "../../store/userStore";
import "./login.css";
import apiBase from "../../utils/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: async function (credentials) {
      const response = await fetch(`${apiBase}/auth/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem("isAuthenticated", "true");
      setFormError("Login successful!");
      setTimeout(() => navigate("/packages"), 1000);
    },
    onError: () => setFormError("Invalid credentials, please try again."),
  });

  function handleSubmit(e) {
    e.preventDefault();
    setFormError(null);

    if (!email) {
      setFormError("Please enter your email.");
      return;
    }
    if (!password) {
      setFormError("Please enter your password.");
      return;
    }

    const payload = {
      email: email,
      password,
    };

    mutate(payload);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In to Your Account</h2>

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" id="loginBtn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Log In"}
        </button>

        <p
          className="message"
          id="message"
          style={{
            color: formError && formError.includes("Invalid") ? "red" : "green",
          }}
        >
          {formError}
        </p>

        <p className="signup-prompt">
          Don't have an account? <Link to="/sign-up">Create One</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
