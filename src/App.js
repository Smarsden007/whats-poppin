import React from "react";
import { Helmet } from "react-helmet";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import { Book } from "./Pages/Book";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Helmet>
        <title>Balloon Company - Home</title>
        <meta
          name="description"
          content="Experience the magic of balloons with Whats Poppin's. Book now or check out our gallery."
        />
      </Helmet>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/gallery"
        element={
          <Helmet>
            <title>Balloon Company - Gallery</title>
            <meta
              name="description"
              content="Discover the luxury of balloons with Whats Poppin's Gallery. Book now or visit our home page."
            />
          </Helmet>
        }
      >
        <Gallery />
      </Route>
      <Route
        path="/book"
        element={
          <Helmet>
            <title>Balloon Company - Book</title>
            <meta
              name="description"
              content="Book your balloon experience now with Whats Poppin's. Check out our gallery or visit our home page."
            />
          </Helmet>
        }
      >
        <Book />
      </Route>
    </Router>
  );
}

export default App;
