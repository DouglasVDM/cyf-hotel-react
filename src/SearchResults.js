import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ bookings }) {
  const [id, setId] = useState(null);

  let green = "#39D1B4";
  let white = "white";

  const [selectedRows, setSelectedRows] = useState([]);

  function handleColorChange(id) {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(el => el !== id));
    } else {
      setSelectedRows(selectedRows.concat(id));
    }
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

  return (
    <div className="table-responsive">
      <table className="table">
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
                  selectedRows.includes(data.id)
                    ? { backgroundColor: green }
                    : { backgroundColor: white }
                }
                onClick={() => handleColorChange(data.id)}
              >
                <td scope="col">{data.id}</td>
                <td scope="col">{data.title}</td>
                <td scope="col">{data.firstName}</td>
                <td scope="col">{data.surname}</td>
                <td scope="col">{data.email}</td>
                <td scope="col">{data.roomId}</td>
                <td scope="col">{data.checkInDate}</td>
                <td scope="col">{data.checkOutDate}</td>
                <td scope="col">
                  {getDifferenceInDays(data.checkInDate, data.checkOutDate)}
                </td>
                <td scope="col">
                  <button
                    onClick={() => {
                      setId(data.id);
                    }}
                    type="text"
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {id ? <CustomerProfile id={id} /> : null}
    </div>
  );
}

export default SearchResults;
