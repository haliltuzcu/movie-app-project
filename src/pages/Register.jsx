import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
const Register = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    console.log("halil");
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerName,
        registerSurname,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              className="peer"
              placeholder=" "
              required=""
              onChange={(e) => {
                setRegisterName(e.target.value);
              }}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_text"
              type="text"
              required
              className="peer"
              placeholder=" "
              onChange={(e) => {
                setRegisterSurname(e.target.value);
              }}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_email"
              type="email"
              className="peer"
              placeholder=" "
              required=""
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_password"
              type="password"
              className="peer"
              placeholder=" "
              required=""
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          
          <button onClick={register} className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="flex justify-between text-center btn-danger"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
