import "./App.css";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reservation from "./components/Reservation/Reservation";
import Personalinfo from "./Personalinfo/Personalinfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <Hero />
      <div className="container">
        <main>
          <form>
            <Reservation />
            <Personalinfo />
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
