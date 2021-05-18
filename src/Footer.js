import React from "react";

const Footer = props => {
  return (
    <div>
      my footer
      <ul>
        {props.footerInfo.map((element, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
