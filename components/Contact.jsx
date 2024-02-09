// pages/contact.js

import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Home Address:</label>
          <textarea id="address" name="address" required className="w-full px-4 py-2 border rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
