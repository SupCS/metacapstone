import React, { useReducer, useState, useEffect } from "react";
import CustomSelect from "../CustomSelector/CustomSelect";
import Button from "../Button/Button";
import wineglass from "../../assets/img/wineglass.svg";
import guests from "../../assets/img/guests.svg";
import calendar from "../../assets/img/calendar.svg";
import clock from "../../assets/img/clock.svg";
import "./Reservation.css";
import { fetchAPI, submitAPI } from "../../api";
import { useNavigate } from "react-router-dom";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
};

export default function Reservation() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [comment, setComment] = useState("");

  const occasionOptions = ["Birthday", "Wedding", "Anniversary"];
  const guestOptions = ["1-2", "3-4", "5-8", "9+"];
  const dateOptions = ["2024-09-10", "2024-09-11", "2024-09-12"];

  useEffect(() => {
    const initializeTimes = async () => {
      try {
        const times = await fetchAPI(
          selectedDate || new Date().toISOString().split("T")[0]
        );
        dispatch({ type: "SET_TIMES", times });
      } catch (error) {
        console.error(error);
      }
    };

    initializeTimes();
  }, [selectedDate]);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    setSelectedTime("");
    dispatch({ type: "UPDATE_TIMES", selectedDate });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        date: selectedDate,
        time: selectedTime,
        occasion: selectedOccasion,
        guests: selectedGuests,
        comment: comment,
      };
      const response = await submitAPI(formData);
      if (response) {
        // Обработка успешной отправки
        console.log("Booking confirmed");
        navigate("/confirmed-booking");
      }
    } catch (error) {
      console.error(error);
      // Обработка ошибки отправки
    }
  };

  return (
    <section className="reservationSection">
      <form onSubmit={handleSubmit}>
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
        <div className="button__container">
          <Button title="Confirm" />
        </div>
      </form>
    </section>
  );
}
