import React, { useState } from "react";
import "./Personalinfo.css";

export default function Personalinfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="personalInfoSection">
      <h2>Personal Information</h2>
      <div className="personalInfo__wrapper">
        <div className="input-group">
          <div className="input-group__wrapper">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lname">Second Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-group__wrapper">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
