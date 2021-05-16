import React from "react";

function BookingTable() {
  return (
    <div className="table-responsive">
      <table className="table">
        <caption>List of users</caption>
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>401</td>
            <td>1Jan2021</td>
            <td>7Jan2021</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>402</td>
            <td>8Jan2021</td>
            <td>15Jan2021</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>403</td>
            <td>16Jan2021</td>
            <td>23Jan2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
