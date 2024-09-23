import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 w-full py-5 text-center">
        <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
      </header>
      <section className="flex-1 flex items-center justify-center bg-white p-12 shadow-lg">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or
            inquiries, feel free to reach out to us.
          </p>

          <div className="flex gap-8">
            {/* Address Section */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <FaMapMarkerAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Our Address</h3>
              <p >Kamakhya Enterprises</p>
              <br />
              <p className="text-lg leading-relaxed text-center">
                Beside Om Sai PG for Gents, <br />
                AMC College, <br />
                Backside Puttaraju Layout, <br />
                Kalkere, Bannerghatta Road, Bannerghatta, Karnataka <br />
                560083, India
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <FaPhoneAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-lg leading-relaxed">
                Phone:{" "}
                <a href="tel:+917026202925" className="text-purple-600">
                  7026202925
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <FaEnvelope className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <p className="text-lg leading-relaxed">
                Email:{" "}
                <a href="mailto:kamakhya@gmail.com" className="text-purple-600">
                  kamakhya@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
