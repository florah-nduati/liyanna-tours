import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import apiBase from "../../utils/api";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: async function (newUser) {
      const response = await fetch(`${apiBase}/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok === false) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const data = await response.json();
      return data;
    },
    onSuccess: () => {
      setFormError("Successfully signed up!");
      setTimeout(() => navigate("/login"), 2000);
    },
    onError: () => setFormError("Error signing up. Please try again."),
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    setFormError(null);
    mutate({
      name,
      email,
      password,
    });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="desert-escape">
      <form className="cosmic-form" onSubmit={handleSubmit}>
        <h2 className="nebula-heading">Welcome to the Adventure Club!</h2>

        <label htmlFor="name" className="galactic-label">
          Your Awesome Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="stardust-input"
          required
        />

        <label htmlFor="email" className="galactic-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="stardust-input"
          required
        />

        <label htmlFor="enter-password" className="galactic-label">
          Password
        </label>
        <input
          type="password"
          id="enter-password"
          name="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="stardust-input"
          required
        />

        <label htmlFor="confirm-password" className="galactic-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="stardust-input"
          required
        />

        <button type="submit" id="signUpBtn" className="supernova-button" disabled={isLoading}>
          {isLoading ? "Launching..." : "Sign Up"}
        </button>

        <p
          className="cosmic-message"
          style={{
            color: formError && formError.includes("Error") ? "red" : "green",
          }}
        >
          {formError}
        </p>

        <p className="orbit-link">
          Already a member? <Link to="/login" className="galaxy-link">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
