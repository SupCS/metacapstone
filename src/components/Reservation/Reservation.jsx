import React from "react";
import Datepicker from "../Datepicker/Datepicker";
import "./Reservation.css";
import Timepicker from "../Timepicker/Timepicker";

export default function Reservation() {
  return (
    <section className="reservationSection">
      <h2>Reservation</h2>
      <div className="reservation__wrapper">
        <div className="input-group__wrapper">
          <div class="input-group">
            <h3>Choose Date</h3>
            <Datepicker />
            <h3>Choose Time</h3>
            <Timepicker />
          </div>
        </div>
        <div className="input-group__wrapper">
          <div class="input-group">
            <h3>Choose Date</h3>
            <input type="text" />
            <h3>Choose Date</h3>
            <input type="text" />
            <h3>Choose Date</h3>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
  );
}
