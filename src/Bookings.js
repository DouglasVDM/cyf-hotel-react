import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    const searchRegex = new RegExp(searchVal, "i");
    const newBookings = [...state.bookings];

    let filteredBooking = newBookings.filter(client => {
      const fullName = client.firstName + client.surname;
      return searchRegex.test(fullName);
    });
    setState({ ...state, filteredBooking });
  };

  const [state, setState] = useState({
    status: "loading",
    bookings: null,
    error: null,
    filteredBooking: null
  });

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(
        response => response.json(),
        () => {
          return {
            status: "loading",
            bookings: null,
            error: "Unable to fetch!",
            filteredBooking: null
          };
        }
      )
      .then(result => {
        setState({
          status: "complete",
          bookings: result,
          error: result.error,
          filteredBooking: result
        });
      });
  }, []);

  if (state.error) {
    return (
      <div>
        <h1>{state.error}</h1>
      </div>
    );
  } else if (state.status === "loading") {
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
          <br />
          <SearchResults bookings={state.filteredBooking} />
        </div>
      </div>
    );
  }
};

export default Bookings;
