import React from "react";
import "./Footer.css";
import FooterLogo from "./FooterLogo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <footer>
          <section className="footer_logo">
            <img src={FooterLogo} alt="Little Lemon Logo"></img>
          </section>
          <nav className="footer_nav">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </nav>
          <section className="footer__contacts">
            <h3>Contacts</h3>
            <ul>
              <li>Adress</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </section>
          <section className="footer_socialmedia">
            <h3>Social Media</h3>
            <ul>
              <li>Instagram</li>
              <li>Telegram</li>
              <li>Youtube</li>
            </ul>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
