import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const myId = Math.random();

  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <br />
      <Bookings />
      <br />
      <Restaurant />
      <br />
      <TouristInfoCards key={myId} />
      <br />
      <Footer footerInfo={footerInfo} />
    </div>
  );
};

export default App;
