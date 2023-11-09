import React from "react";
import Datepicker from "../Datepicker/Datepicker";
import "./Reservation.css";

export default function Reservation() {
  return (
    <section className="reservationSection">
      <h2>Reservation</h2>
      <Datepicker />
    </section>
  );
}
