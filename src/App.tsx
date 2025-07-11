import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatYouLearn from './components/WhatYouLearn';
import ForWhom from './components/ForWhom';
import Webinar from './components/Webinar';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatYouLearn />
      <ForWhom />
      <Webinar />
      <JoinForm />
      <Footer />
    </div>
  );
}

export default App;