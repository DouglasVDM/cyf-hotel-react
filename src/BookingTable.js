import React from "react";
import FakeBookings from "./data/fakeBookings.json";

function BookingTable() {
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
        {FakeBookings.map(data => {
          return (
            <tbody key={data.id}>
              <tr>
                <th scope="col">{data.id}</th>
                <th scope="col">{data.title}</th>
                <th scope="col">{data.firstName}</th>
                <th scope="col">{data.surname}</th>
                <th scope="col">{data.email}</th>
                <th scope="col">{data.roomId}</th>
                <th scope="col">{data.checkInDate}</th>
                <th scope="col">{data.checkOutDate}</th>
                <th scope="col">
                  {date_difference_indays(data.checkInDate, data.checkOutDate)}
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

function date_difference_indays(date1, date2) {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
}

export default BookingTable;
