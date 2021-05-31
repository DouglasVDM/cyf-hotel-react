import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    const newBookings = bookings;
    let filteredBooking = newBookings.filter(
      client =>
        client.firstName.toUpperCase() === searchVal.toUpperCase() ||
        client.surname.toUpperCase() === searchVal.toUpperCase()
    );
    setBookings(filteredBooking);
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(
        result => {
          setIsLoaded(true);
          setBookings(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults bookings={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;
