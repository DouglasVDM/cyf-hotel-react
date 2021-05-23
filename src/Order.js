import React, { useState } from "react";
import RestaurantButton from "./RestauranButton";

function Order() {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);

  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
}

export default Order;
