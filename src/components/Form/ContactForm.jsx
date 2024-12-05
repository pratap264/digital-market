import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos"; // AOS library
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      offset: 50, // Trigger animation slightly into viewport
      duration: 600, // Animation duration
      easing: "ease-in-out",
      once: true, // Animation occurs only once
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.subject) errors.subject = "Subject is required.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Send email using EmailJS
      emailjs
        .sendForm(
          "service_dim0oqj", // Replace with your service ID
          "template_luigvcc", // Replace with your template ID
          e.target,
          "QBd3iuS3i6Jby4VBd" // Replace with your user ID
        )
        .then(
          (result) => {
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            alert("Something went wrong. Please try again.");
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      data-aos="fade-up"
      className={`max-w-md mx-auto p-6 ${
        theme === "dark"
          ? "bg-gray-500 bg-opacity-90 text-white backdrop-blur-sm shadow-2xl"
          : "bg-gray-200 bg-opacity-80 text-black"
      } rounded-lg shadow-lg my-8 transition-transform duration-300 ease-in-out`}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-[#00a8cb]"
            } rounded-md transition-all duration-150 focus:ring-2 focus:ring-[#00a8cb] focus:outline-none`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-[#00a8cb]"
            } rounded-md transition-all duration-150 focus:ring-2 focus:ring-[#00a8cb] focus:outline-none`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.subject ? "border-red-500" : "border-[#00a8cb]"
            } rounded-md transition-all duration-150 focus:ring-2 focus:ring-[#00a8cb] focus:outline-none`}
            placeholder="Enter the subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.message ? "border-red-500" : "border-[#00a8cb]"
            } rounded-md transition-all duration-150 focus:ring-2 focus:ring-[#00a8cb] focus:outline-none`}
            placeholder="Enter your message"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-[#00a8cb] text-white font-semibold rounded-md hover:bg-[#008cb2] transition-all duration-150 transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
