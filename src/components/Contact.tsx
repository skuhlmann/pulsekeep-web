"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-mono font-bold mb-6 text-white">
            Let&apos;s talk.
          </h2>
          <p className="text-xl text-slate-300">
            Whether you&apos;re exploring a project or ready to build, Pulsekeep
            is here to help you feel the signal.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          <a
            href="#"
            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-mono rounded-lg transition-colors duration-200 text-center"
          >
            Schedule a Call
          </a>
          <a
            href="#contact-form"
            className="px-8 py-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-mono rounded-lg transition-colors duration-200 text-center"
          >
            Send a Message
          </a>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-slate-800/50 dark:bg-slate-800/30 p-8 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-colors duration-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors duration-200"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="organization"
              className="block text-sm font-mono text-slate-300 mb-2"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors duration-200"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-mono text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-magenta-500 hover:from-teal-600 hover:to-magenta-600 text-white font-mono rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
