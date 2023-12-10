import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./Landing";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="*" element={<Landing/>} />
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
