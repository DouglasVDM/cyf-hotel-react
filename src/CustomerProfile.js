import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customer, setCustomer] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(
        result => {
          setIsLoaded(true);
          setCustomer(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
        <li>Customer {customer.id} Profile</li>
        <li>Email: {customer.email}</li>
        <li>Is VIP: {String(customer.vip)}</li>
        <li>Phone Number: {customer.phoneNumber}</li>
      </div>
    ) : null;
  }
}

export default CustomerProfile;
