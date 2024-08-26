import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard after successful sign-up
    } catch (error) {
      setError("Failed to create an account. Please try again.");
      console.error("Sign-up error:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#0d6efd",
            height: "62%",
            clipPath: "polygon(100% 52%, 0% 100%, 0% 0%, 100% 0%)",
            overflow: "hidden",
            left: 0,
            right: 0,
            top: 0,
          }}
        />
        <form onSubmit={submitForm}>
          <section className="vh-100 sign-up-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong">
                    <div className="card-body p-5 text-center">
                      <img
                        className="d-flex m-auto pb-3 img"
                        src="logo.png"
                        alt="logo"
                      />
                      <div className="card-title h5">
                        <h2>Sign Up</h2>
                      </div>

                      <div className="mb-4 w-100">
                        <label className="form-label" htmlFor="formBasicEmail">
                          Email address
                        </label>
                        <input
                          placeholder="Enter email"
                          type="email"
                          id="formBasicEmail"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-4 w-100">
                        <label
                          className="form-label"
                          htmlFor="formBasicPassword"
                        >
                          Password
                        </label>
                        <input
                          placeholder="Password"
                          type="password"
                          id="formBasicPassword"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="mb-4 w-100">
                        <label
                          className="form-label"
                          htmlFor="formConfirmPassword"
                        >
                          Confirm Password
                        </label>
                        <input
                          placeholder="Confirm Password"
                          type="password"
                          id="formConfirmPassword"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      {error && <div className="alert alert-danger">{error}</div>}

                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Signing Up..." : "Sign Up"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
