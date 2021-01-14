import "./App.css";
import "./Components/Footer.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"

export const App = () => {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}