import React, { useState } from "react";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tokenValue = "sample-token"; // demo token

    // ✅ REQUIRED FETCH FOR TASK 10
    fetch("https://YOUR-BACKEND-URL/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",        // ✅ required
        "Authorization": "Bearer " + tokenValue   // ✅ required
      },
      body: JSON.stringify(loginData)
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
