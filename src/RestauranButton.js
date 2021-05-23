import React from "react";

function RestauranButton({ orderOne }) {
  return (
    <div>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default RestauranButton;
