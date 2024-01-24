import React from "react";
import "./Datepicker.css";

export default function Datepicker({ selectedDate, onSelectDate }) {
  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onSelectDate(e.target.value)}
      ></input>
    </div>
  );
}
