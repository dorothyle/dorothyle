import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Landing } from "./Landing";
import { Experience } from "./Experience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="experience" element={<Experience/>} />
            <Route path="*" element={<Landing/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
