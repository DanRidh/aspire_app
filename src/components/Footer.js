import React from "react";
import logo from "../images/logo-white.png";

const Footer = () => {
  // TODO: Fix footer overlaps with web content on smaller screens
  return (
    <>
      <div className="footer">
        <img
          src={logo}
          style={{
            height: "50px",
            width: "70px",
            marginTop: "10px",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        ></img>
        <p>
          © 2021 ASPIRE and any associated logos are trademarks, service marks,
          and/or registered trademarks of ASPIRE.
        </p>
        <div className="footer-links">
          <ul>
            <li>
              <a className="" href="#" target="_blank">
                Privacy Notice
              </a>
            </li>
            <li>
              <a className="" href="#" target="_blank">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="" href="javascript:void(0);" target="">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
