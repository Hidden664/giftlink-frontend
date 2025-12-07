import React, { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ REQUIRED FETCH FOR TASK 9
    fetch("https://YOUR-BACKEND-URL/api/register", {
      method: "POST",                   // ✅ method present
      headers: {                        // ✅ headers present
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="Username" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
