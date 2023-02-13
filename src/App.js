import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Book } from "./Pages/Book";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={
        <div>
      <NavBar />
      <Home />
      </div>
      } />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
