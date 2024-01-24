import React from "react";
import "./Timepicker.css";

export default function Timepicker({ selectedTime, onSelectTime }) {
  return (
    <div>
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => onSelectTime(e.target.value)}
      ></input>
    </div>
  );
}
