import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_ayushd",
        "template_mytemp",
        templateParams,
        "IFXZOFDbxHXwxagKX"
      );
      toast.success("Your message has been sent");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Contact me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="form-group">
            <label className="label">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label className="label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea"
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
