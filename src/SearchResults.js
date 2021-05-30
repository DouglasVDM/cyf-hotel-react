import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ bookings }) {
  const [id, setId] = useState([]);

  let green = "#39D1B4";
  let white = "white";

  const initialState = { backgroundColor: white, selectedIndex: -1 };
  const [{ backgroundColor, selectedIndex }, setBackGColor] = useState(
    initialState
  );

  function handleColorChange(id) {
    const newColor =
      id === selectedIndex
        ? backgroundColor === white
          ? green
          : white
        : green;
    setBackGColor({ backgroundColor: newColor, selectedIndex: id });
  }

  function getDifferenceInDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  // const handleOnClick =

  return (
    <div className="table-responsive">
      <table className="table">
        <caption>List of Customers</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(data => {
            return (
              <tr
                key={data.id}
                style={
                  data.id === selectedIndex
                    ? { backgroundColor: backgroundColor }
                    : { backgroundColor: white }
                }
                onClick={() => handleColorChange(data.id)}
              >
                <th scope="col">{data.id}</th>
                <th scope="col">{data.title}</th>
                <th scope="col">{data.firstName}</th>
                <th scope="col">{data.surname}</th>
                <th scope="col">{data.email}</th>
                <th scope="col">{data.roomId}</th>
                <th scope="col">{data.checkInDate}</th>
                <th scope="col">{data.checkOutDate}</th>
                <th scope="col">
                  {getDifferenceInDays(data.checkInDate, data.checkOutDate)}
                </th>
                <th>
                  <button
                    onClick={() => {
                      console.log("Buttin is working!");
                      setId(data.id);
                    }}
                    type="text"
                    scope="col"
                  >
                    Show Profile
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
}

export default SearchResults;
