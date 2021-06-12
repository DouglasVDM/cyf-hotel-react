import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(
        result => {
          setIsLoaded(true);
          setCustomer(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return customer ? (
      <div>
        <ul style={{ listStyle: "none" }}>
          <li>Customer {customer.id} Profile</li>
          <li>Email: {customer.email}</li>
          <li>Is VIP: {String(customer.vip)}</li>
          <li>Phone Number: {customer.phoneNumber}</li>
        </ul>
      </div>
    ) : null;
  }
}

export default CustomerProfile;
