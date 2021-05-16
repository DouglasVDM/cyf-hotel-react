import React from "react";
// import Glasgow from "./Glasgow";
// import London from "./London";
// import Manchester from "./Manchester";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>"Glasgow"</h2>
          <p>
            Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
            along both banks of the River Clyde 20 miles (32 km) from that
            river’s mouth on the western, or Atlantic, coast. Glasgow is
            Scotland’s largest city, and it forms an independent council area
            that lies entirely within the historic county of Lanarkshire.
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            More Information{" "}
          </a>
        </div>
      </div>
      ,
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>"Manchester"</h2>
          <p>
            Manchester is a lively city brimming with character, whether it’s
            the Industrial Revolution or a musical revolution, Manchester is at
            the heart of it. From shopping at the Trafford Centre to watching
            football at Old Trafford, there’s something for everyone.
          </p>
          <a
            href="https://visitmanchester.com"
            target="_blank"
            className="btn btn-primary"
          >
            More Information{" "}
          </a>
        </div>
      </div>
      ,
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>"London"</h2>
          <p>
            London is famous for more than its magnificent ancient buildings,
            the Palace of Westminster, Trafalgar Square, Tower of London, London
            Eye, Art Galleries, and Big Ben. As the capital city of the United
            Kingdom of Great Britain and Northern Ireland, London is well known
            for influencing other cities of the world since the Middle Ages.
          </p>
          <a
            href="https://visitlondon.com"
            target="_blank"
            className="btn btn-primary"
          >
            More Information{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
