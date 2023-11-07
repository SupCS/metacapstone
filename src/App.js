import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section className="heroSection">Hero Section</section>
        <section className="reservationSection">Reservation</section>
        <section className="personalinfoSection">Personal Information</section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
