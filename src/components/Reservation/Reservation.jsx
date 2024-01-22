import React from "react";
import Datepicker from "../Datepicker/Datepicker";
import "./Reservation.css";
import Timepicker from "../Timepicker/Timepicker";
import CustomSelect from "./CustomSelect";
import wineglass from "../../assets/img/wineglass.svg";
import guests from "../../assets/img/guests.svg";

export default function Reservation() {
  const occasionOptions = ["Birthday", "Wedding", "Anniversary"];
  const guestOptions = ["1-2", "3-4", "5-8", "9+"];
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
            <h3>Select Occasion</h3>
            <CustomSelect
              options={occasionOptions}
              placeholder="Occasion"
              icon={wineglass}
            />
            <h3>Select Guests</h3>
            <CustomSelect
              options={guestOptions}
              placeholder="Guests"
              icon={guests}
            />
            <h3>Additional comment</h3>
            <textarea
              className="additional-comment"
              placeholder="Leave your comment here"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
