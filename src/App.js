import "./App.css";
import React, { useReducer } from "react";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reservation from "./components/Reservation/Reservation";
// import Personalinfo from "./Personalinfo/Personalinfo";

const initializeTimes = () => {
  return ["12:00", "15:00", "18:00"];
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (action.selectedDate === "2024-01-01") {
        return ["10:00", "11:00", "12:00"];
      } else if (action.selectedDate === "2024-01-02") {
        return ["13:00", "14:00", "15:00"];
      } else if (action.selectedDate === "2024-01-03") {
        return ["16:00", "17:00", "18:00"];
      } else {
        return state;
      }
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <Hero />
      <div className="container">
        <main>
          <form>
            <Reservation availableTimes={availableTimes} dispatch={dispatch} />
            {/* <Personalinfo /> */}
            <div className="button__container">
              <Button title="Confirm" />
            </div>
          </form>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
