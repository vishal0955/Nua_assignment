import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/operations/AuthApi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",  
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let success;

    isSignUp
      ? (success = await dispatch(signup(formData)))
      : (success = await dispatch(login(formData)));

    if (success && isSignUp) {
      console.log("isSignUp: ", isSignUp);
      setIsSignUp(false);
      navigate("/login");
    } else if (success) {
      console.log('success: ', success);
      navigate("/dashboard");
    }
  }

  const toggleForm = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <p className="title">{isSignUp ? "Sign Up" : "Login"}</p>
      <form className="form" onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
          {isSignUp && (
            <div className="forgot">
              <a href="#">Forgot Password ?</a>
            </div>
          )}
        </div>
        <button className="sign mt-4" type="submit">
          {isSignUp ? "Sign Up" : "Sign in"}
        </button>
      </form>
      <p className="signup mt-4">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <a href="#" className="mt-5" onClick={toggleForm}>
          {isSignUp ? "Sign in" : "Sign up"}
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
