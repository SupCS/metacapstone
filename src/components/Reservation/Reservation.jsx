import React from "react";
import Datepicker from "../Datepicker/Datepicker";
import "./Reservation.css";
import Timepicker from "../Timepicker/Timepicker";
import CustomSelect from "../CustomSelector/CustomSelect";
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
            <div className="input-date">
              <h3>Choose Date</h3>
              <Datepicker />
            </div>
            <div className="input-time">
              <h3>Choose Time</h3>
              <Timepicker />
            </div>
            <div className="input-comment">
              <h3>Additional comment</h3>
              <textarea
                className="additional-comment"
                placeholder="Leave your comment here"
              />
            </div>
          </div>
        </div>
        <div className="input-group__wrapper">
          <div class="input-group">
            <div className="input-occasion">
              <h3>Select Occasion</h3>
              <CustomSelect
                options={occasionOptions}
                placeholder="Occasion"
                icon={wineglass}
              />
            </div>
            <div className="input-guests">
              <h3>Select Guests</h3>
              <CustomSelect
                options={guestOptions}
                placeholder="Guests"
                icon={guests}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
