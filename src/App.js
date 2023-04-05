import Header from "./components/Header";
import BookmarkPage from "./components/pages/BookmarkPage";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onchangeTag, addAlltags } from "./store";

function App() {
  const dispatch = useDispatch();

  const getRandomQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => dispatch(onchangeTag(response.data)));
  };

  useEffect(() => {
    getRandomQuote();
    axios
      .get("https://api.quotable.io/tags")
      .then((response) => dispatch(addAlltags(response.data)));
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage getRandomQuote={getRandomQuote} />}
          />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
