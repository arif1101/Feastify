import React from 'react';

const Contact = () => {
    return (
            <div className="h-screen bg-orange-100 flex items-center justify-center p-6">
              <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Contact Us</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-orange-800 mb-1 font-semibold">Name</label>
                    <input
                      type="text"
                      className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-800 mb-1 font-semibold">Email</label>
                    <input
                      type="email"
                      className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-800 mb-1 font-semibold">Message</label>
                    <textarea
                      rows="5"
                      className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
    );
};

export default Contact;