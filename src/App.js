import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import BodySection from "./components/BodySection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <BodySection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
