import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <br />
      <ul style={{ listStyle: "none" }}>
        <Order orderType="Pizzas" />
        <br />
        <Order orderType="Salads" />
        <br />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
