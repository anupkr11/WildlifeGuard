import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If no API → store locally
    const queries = JSON.parse(localStorage.getItem("queries")) || [];
    queries.push(form);
    localStorage.setItem("queries", JSON.stringify(queries));

    alert("Your query has been submitted successfully!");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">
        Send Us Your Query
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name*"
            required
            value={form.firstName}
            onChange={handleChange}
            className="border px-4 py-3 rounded-md w-full"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border px-4 py-3 rounded-md w-full"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={handleChange}
          className="border px-4 py-3 rounded-md w-full"
        />

        <textarea
          name="message"
          placeholder="What can we help you with?"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
          className="border px-4 py-3 rounded-md w-full"
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
