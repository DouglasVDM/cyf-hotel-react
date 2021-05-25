import React, { useState } from "react";

function SearchResults({ bookings }) {
  let green = "#39D1B4";
  let white = "white";

  const initialState = green;
  const [backGColor, setBackGColor] = useState(initialState);

  function handleColorChange() {
    const newColor = backGColor === white ? green : white;
    setBackGColor(newColor);
  }

  // const getRandomColor = () => {
  //   return "#" + Math.random().toString(16).slice(2, 8);
  // }

  // I found this formula
  // here: https://css-tricks.com/snippets/javascript/random-hex-backgroundColor/
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);

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
          </tr>
        </thead>
        <tbody>
          {bookings.map(data => {
            return (
              <tr
                key={data.id}
                style={{ backgroundColor: backGColor }}
                color={{ backGColor }}
                onClick={handleColorChange}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
