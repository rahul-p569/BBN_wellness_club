import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, X } from 'lucide-react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    weightGoal: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullName", formData.name);
    form.append("phoneNumber", formData.phone);
    form.append("email", formData.email);
    form.append("age", formData.age);
    form.append("weightGoal", formData.weightGoal);

    const scriptURL = "https://script.google.com/macros/s/AKfycbweoRTxmt_fWPHhPpPTfHfr2wlYVUrqE5isgEh7gxTebeDMD8_2cWUitRqHP4xp1qs/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });
      const result = await response.text();
      setShowPopup(true);
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/C62S6zULuRvBSqRmlEFzK9?mode=ac_c', '_blank');
    setShowPopup(false);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      age: '',
      weightGoal: ''
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section id="join-form" className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800 mb-6 tracking-tight">Start Your Journey Now</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
              Fill out the form below to join our WhatsApp community and get instant access to 
              expert guidance, free tools, and exclusive content.
            </p>
          </div>

          <div className="bg-white shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-emerald-700 p-12 text-white">
                <div className="flex items-center mb-12">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-light">Join Our Community</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal mb-2">Instant Access</h4>
                    <p className="text-emerald-100 font-light">Get immediate access to our wellness community</p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal mb-2">Expert Guidance</h4>
                    <p className="text-emerald-100 font-light">Direct access to wellness experts and coaches</p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal mb-2">Free Tools</h4>
                    <p className="text-emerald-100 font-light">Access to body parameter measurement tools</p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal mb-2">Earning Opportunities</h4>
                    <p className="text-emerald-100 font-light">Learn how to earn while staying healthy</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-stone-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-light"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-stone-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-light"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-stone-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-light"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-light text-stone-700 mb-3">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="16"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-light"
                      placeholder="Enter your age"
                    />
                  </div>

                  <div>
                    <label htmlFor="weightGoal" className="block text-sm font-light text-stone-700 mb-3">
                      Weight Goal *
                    </label>
                    <select
                      id="weightGoal"
                      name="weightGoal"
                      required
                      value={formData.weightGoal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all font-light"
                    >
                      <option value="">Select your goal</option>
                      <option value="lose-weight">Lose Weight</option>
                      <option value="maintain-weight">Maintain Current Weight</option>
                      <option value="gain-weight">Gain Healthy Weight</option>
                      <option value="improve-fitness">Improve Overall Fitness</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-800 text-white py-4 px-6 font-light text-lg hover:bg-stone-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Submit
                    <Send className="ml-3 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-stone-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-700" />
              </div>
              
              <h3 className="text-2xl font-light text-stone-800 mb-4">Thank You!</h3>
              <p className="text-stone-600 mb-8 font-light">
                Your information has been submitted successfully. Click the button below to join our WhatsApp community.
              </p>
              
              <button
                onClick={handleJoinWhatsApp}
                className="w-full bg-emerald-700 text-white py-4 px-6 font-light text-lg hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center mb-4"
              >
                Join Our WhatsApp Community
                <MessageCircle className="ml-3 w-5 h-5" />
              </button>
              
              <button
                onClick={closePopup}
                className="text-stone-500 font-light hover:text-stone-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinForm;