import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Book } from "./Pages/Book";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";
import { MobileNav } from "./Components/MobileNav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <div>
                <div className="block lg:hidden">
                <MobileNav /></div>
                <div className="hidden lg:block">
                  <NavBar />
                </div>
                <Home />
              </div>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
