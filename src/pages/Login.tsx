import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  // Login State
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  // Register State
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", loginData);
    // Add auth logic here
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering user:", registerData);
    // Add registration logic here
  };

  return (
    <>
      <Breadcrumb title="Login" />
      <div className="login__section section--padding">
        <div className="container">
          <div className="login__section--inner">
            <div className="row row-cols-md-2 row-cols-1">
              {/* LOGIN COLUMN */}
              <div className="col">
                <div className="account__login">
                  <div className="account__login--header mb-25">
                    <h2 className="account__login--header__title mb-15">
                      Login
                    </h2>
                    <p className="account__login--header__desc">
                      Login if you are a returning customer.
                    </p>
                  </div>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="account__login--inner">
                      <input
                        className="account__login--input"
                        placeholder="Email Address"
                        type="email"
                        required
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                      />
                      <input
                        className="account__login--input"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                      />
                      <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                        <div className="account__login--remember position__relative">
                          <input
                            className="checkout__checkbox--input"
                            id="check1"
                            type="checkbox"
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                remember: e.target.checked,
                              })
                            }
                          />
                          <span className="checkout__checkbox--checkmark"></span>
                          <label
                            className="checkout__checkbox--label login__remember--label"
                            htmlFor="check1"
                          >
                            Remember me
                          </label>
                        </div>
                        <button
                          className="account__login--forgot"
                          type="button"
                        >
                          Forgot Your Password?
                        </button>
                      </div>
                      <button
                        className="account__login--btn primary__btn"
                        type="submit"
                      >
                        Login
                      </button>

                      <div className="account__login--divide">
                        <span className="account__login--divide__text">OR</span>
                      </div>

                      <div className="account__social d-flex justify-content-center mb-15">
                        <a
                          className="account__social--link facebook"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com"
                        >
                          Facebook
                        </a>
                        <a
                          className="account__social--link google"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com"
                        >
                          Google
                        </a>
                        <a
                          className="account__social--link twitter"
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com"
                        >
                          Twitter
                        </a>
                      </div>
                      <p className="account__login--signup__text">
                        Don't Have an Account?{" "}
                        <button
                          type="button"
                          className="text-primary border-0 bg-transparent"
                        >
                          Sign up now
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* REGISTER COLUMN */}
              <div className="col">
                <div className="account__login register">
                  <div className="account__login--header mb-25">
                    <h2 className="account__login--header__title mb-15">
                      Create an Account
                    </h2>
                    <p className="account__login--header__desc">
                      Register here if you are a new customer
                    </p>
                  </div>
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="account__login--inner">
                      <input
                        className="account__login--input"
                        placeholder="Username"
                        type="text"
                        required
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            username: e.target.value,
                          })
                        }
                      />
                      <input
                        className="account__login--input"
                        placeholder="Email Address"
                        type="email"
                        required
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            email: e.target.value,
                          })
                        }
                      />
                      <input
                        className="account__login--input"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            password: e.target.value,
                          })
                        }
                      />
                      <input
                        className="account__login--input"
                        placeholder="Confirm Password"
                        type="password"
                        required
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                      <button
                        className="account__login--btn primary__btn mb-10"
                        type="submit"
                      >
                        Submit & Register
                      </button>
                      <div className="account__login--remember position__relative">
                        <input
                          className="checkout__checkbox--input"
                          id="check2"
                          type="checkbox"
                          required
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              agree: e.target.checked,
                            })
                          }
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label
                          className="checkout__checkbox--label login__remember--label"
                          htmlFor="check2"
                        >
                          I have read and agree to the terms & conditions
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
