import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.footerInfo.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      my footer
    </div>
  );
};

export default Footer;
