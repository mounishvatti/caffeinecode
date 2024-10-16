import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Signup = () => {
  const pwd = document.getElementById(admin - password);
  const confmpwd = document.getElementById(re - enter - password);

  if (pwd !== confmpwd) {
    alert("Passwords do not match");
  }

  return (
    <>
      <div>
        <div>
            <p>Already signed up? <Link to="/login">Login</Link></p>
        </div>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" id="admin-password" />
        <input type="password" placeholder="re-enter password" />
        <button>Signup</button>
      </div>
    </>
  );
};

export default Signup;
