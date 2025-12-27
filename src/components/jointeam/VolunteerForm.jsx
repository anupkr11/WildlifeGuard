import React, { useState } from "react";

const VolunteerForm = () => {
  const [isIndian, setIsIndian] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    aadhaar: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("volunteers")) || [];

    localStorage.setItem(
      "volunteers",
      JSON.stringify([...existing, formData])
    );

    alert("Thank you for joining the initiative!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      aadhaar: "",
      interest: "",
    });
    setIsIndian(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        Volunteer Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <select
          name="country"
          value={formData.country}
          onChange={(e) => {
            handleChange(e);
            setIsIndian(e.target.value === "India");
          }}
          required
          className="w-full border px-4 py-3 rounded-lg"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>

        {isIndian && (
          <input
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded-lg"
          />
        )}

        <textarea
          name="interest"
          placeholder="Why do you want to join this initiative?"
          value={formData.interest}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition text-2xl"
        >
          Join as Volunteer
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
