import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-20 bg-black text-white">
      <div>
        <img className="w-20" src={logo} alt="" />
        <p>
          The Fat Chef
          <br />
          Established On 2022
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Mixed Food
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
