import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4"> Contact Us</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg border-gray-200 shadow-md border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg border-gray-200 shadow-md border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h2>
          <h3 className="text-lg text-gray-600 mb-6">Say Hello to us!</h3>
          <p className="mb-8 text-gray-700">
            Let's talk business or just have a coffee. <br /> We would love to
            hear from you!
          </p>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="address"
                className="block text-xl font-bold text-blue-600 mb-2"
              >
                Address
              </label>
              <p className="text-gray-700 hover:text-blue-500 hover:scale-105 transition duration-200">
                123 Main Street, City, State 12345
              </p>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xl font-bold text-blue-600 mb-2"
              >
                Phone
              </label>
              <p className="text-gray-700 hover:text-blue-500 hover:scale-105 transition duration-200">
                +91 1234567890
              </p>
            </div>

            <div>
              <label
                htmlFor="oueemail"
                className="block text-xl font-bold text-blue-600 mb-2"
              >
                Email
              </label>
              <p className="text-gray-700 hover:text-blue-500 hover:scale-105 transition duration-200">
                hello@letstalk.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
