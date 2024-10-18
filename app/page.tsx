import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
