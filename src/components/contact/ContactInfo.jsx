import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 space-y-6 text-xl">
      <h2 className="text-3xl font-bold mb-4">
        Get in Touch
      </h2>

      <div>
        <h4 className="font-semibold">📍 Address</h4>
        <p className="text-gray-600">
          Ministry of Environment, Forest and Climate Change  
          Indira Paryavaran Bhawan, New Delhi, India
        </p>
      </div>

      <div>
        <h4 className="font-semibold">📧 Email</h4>
        <p className="text-gray-600">support@wildlife.gov.in</p>
      </div>

      <div>
        <h4 className="font-semibold">📞 Contact Number</h4>
        <p className="text-gray-600">+91 11 2469 5000</p>
      </div>

      <p className="text-sm text-gray-500 text-xl">
        Our team responds to queries within 24–48 working hours.
      </p>
    </div>
  );
};

export default ContactInfo;
