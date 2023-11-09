import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reservation from "./components/Reservation/Reservation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <Hero />
      <div className="container">
        <main>
          <Reservation />
          <section className="personalinfoSection">
            Personal Information
          </section>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
