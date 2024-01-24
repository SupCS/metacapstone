import React, { useState } from "react";
import CustomSelect from "../CustomSelector/CustomSelect";
import wineglass from "../../assets/img/wineglass.svg";
import guests from "../../assets/img/guests.svg";
import calendar from "../../assets/img/calendar.svg";
import clock from "../../assets/img/clock.svg";
import "./Reservation.css";

export default function Reservation({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [comment, setComment] = useState("");

  const occasionOptions = ["Birthday", "Wedding", "Anniversary"];
  const guestOptions = ["1-2", "3-4", "5-8", "9+"];
  const dateOptions = ["2024-01-01", "2024-01-02", "2024-01-03"];

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);

    if (!availableTimes.includes(selectedTime)) {
      setSelectedTime("");
    }

    dispatch({ type: "UPDATE_TIMES", selectedDate });
  };

  return (
    <section className="reservationSection">
      <h2>Reservation</h2>
      <div className="reservation__wrapper">
        <div className="input-group__wrapper">
          <div className="input-group">
            <div className="input-date">
              <h3>Choose Date</h3>
              <CustomSelect
                options={dateOptions}
                placeholder="Select a date"
                icon={calendar}
                selectedOption={selectedDate}
                onSelect={handleDateChange}
              />
            </div>
            <div className="input-time">
              <h3>Choose Time</h3>
              <CustomSelect
                options={availableTimes}
                placeholder="Select a time"
                icon={clock}
                selectedOption={selectedTime}
                onSelect={setSelectedTime}
              />
            </div>
            <div className="input-comment">
              <h3>Additional comment</h3>
              <textarea
                className="additional-comment"
                placeholder="Leave your comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="input-group__wrapper">
          <div className="input-group">
            <div className="input-occasion">
              <h3>Select Occasion</h3>
              <CustomSelect
                options={occasionOptions}
                placeholder="Occasion"
                icon={wineglass}
                selectedOption={selectedOccasion}
                onSelect={setSelectedOccasion}
              />
            </div>
            <div className="input-guests">
              <h3>Select Guests</h3>
              <CustomSelect
                options={guestOptions}
                placeholder="Guests"
                icon={guests}
                selectedOption={selectedGuests}
                onSelect={setSelectedGuests}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
