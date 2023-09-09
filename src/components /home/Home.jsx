import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhatWeOffer from "./WhatWeOffer";
import TeachingKids from "./TeachingKids";
import InfoSlides from "./InfoSlides";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatWeOffer />
      <TeachingKids />
      <InfoSlides />
      <CTA />
      <Footer />
    </div>
  );
}
