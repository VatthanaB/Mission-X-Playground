import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhatWeOffer from "./WhatWeOffer";
import TeachingKids from "./TeachingKids";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatWeOffer />
      <TeachingKids />
    </div>
  );
}
