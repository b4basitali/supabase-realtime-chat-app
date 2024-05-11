import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // If successful, you can handle the response here
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-[30vw] flex-col gap-5 items-center justify-center bg-slate-100 shadow-lg p-5 rounded-lg">
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-lg mb-3">
            Fullname
          </label>
          <input
            type="text"
            className="h-8 rounded-md"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-lg mb-3">
            Email
          </label>
          <input
            type="email"
            className="h-8 rounded-md"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="pwd" className="text-lg mb-3">
            Password
          </label>
          <input
            type="password"
            className="h-8 rounded-md"
            id="pwd"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full mt-3 bg-blue-600 rounded-md h-8 text-white"
          type="submit"
          value="Register"
        />
        <Link to="/" className="text-blue-600">
          Already have an account
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;