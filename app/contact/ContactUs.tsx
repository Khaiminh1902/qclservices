"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    contactPerson: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xzzdyprg", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(
        "Your message has been sent! We will get back to you within 24 hours."
      );
    } else {
      alert("There was an issue sending your message, please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[50px] lg:mt-[20px] lg:pr-10">
      <h1 className="text-[#d8a339] text-[28px] font-bold mb-4">CONTACT US</h1>
      <p className="mb-6 text-center">
        If you have any inquiries, feedback, or suggestions, please complete the
        form below and submit it to us. We sincerely appreciate your input!
      </p>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Customer/Company Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-black"
            >
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contactPerson"
            className="block text-sm font-medium text-black"
          >
            Main Contact Person (Contact Name) *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-black"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-2 py-2 border-2 border-gray-300 focus:ring-[#d8a339] focus:border-[#d8a339] transition-all duration-300 sm:text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#d8a339] text-white py-2 px-2 rounded-md hover:bg-[#b17a2e] focus:outline-none focus:ring-2 focus:ring-[#b17a2e] transition-all duration-300"
        >
          Submit Information
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
