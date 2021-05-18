import React from "react";
import FakeBookings from "./data/fakeBookings.json";

function BookingTable() {
  return (
    <div className="table-responsive">
      <table className="table">
        <caption>List of Customers</caption>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
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
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default BookingTable;
