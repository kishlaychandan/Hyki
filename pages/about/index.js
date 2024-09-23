import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 w-full py-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-white">Welcome to Kamakhya Enterprises</h2>
      </header>

      <section className="flex-1 flex items-center justify-center bg-white p-12 shadow-lg">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            At Kamakhya Enterprises, we specialize in creating innovative and high-quality products
            that enhance the cleanliness and ambiance of your home. Founded in 2020, we have quickly
            established ourselves as a trusted name in the industry, known for our commitment to quality
            and customer satisfaction.
          </p>
          <p className="text-lg leading-relaxed">
            Our product range includes the highly effective Hyki Magic Floor Cleaner and delightful
            Room Fresheners, designed to provide you with a fresh and inviting environment.
          </p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center bg-gray-50 p-12 shadow-lg">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Company Factsheet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-white shadow">
              <h3 className="font-semibold">Nature of Business:</h3>
              <p>Manufacturing and Product-Based Company</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow">
              <h3 className="font-semibold">CEO:</h3>
              <p>Prashanth J</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow">
              <h3 className="font-semibold">Established:</h3>
              <p>2020</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow">
              <h3 className="font-semibold">GST No:</h3>
              <p>29CKUPP5028D1ZP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center bg-white p-12 shadow-lg">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be a leading product-based company, renowned for our quality, innovation, and dedication
            to enhancing the everyday lives of our customers. We aim to create products that combine
            functionality with exceptional user experience.
          </p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center bg-gray-50 p-12 shadow-lg">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to deliver top-notch products that promote cleanliness and comfort in every
            home. We strive to innovate continually, ensuring that our offerings meet the evolving
            needs of our customers while maintaining the highest standards of quality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
