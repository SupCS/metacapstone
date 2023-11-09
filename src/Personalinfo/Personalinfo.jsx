import React from "react";
import "./Personalinfo.css";

export default function Personalinfo() {
  return (
    <section className="personalInfoSection">
      <h2>Personal Information</h2>
      <div className="personalInfo__wrapper">
        <div class="input-group">
          <div className="input-group__wrapper">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" placeholder="Name" />
            <label htmlFor="lname">Second Name</label>
            <input type="text" id="lname" placeholder="Surname" />
          </div>
        </div>
        <div class="input-group">
          <div className="input-group__wrapper">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Date" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
        </div>
      </div>
    </section>
  );
}
