import Header from "./components/Header";
import BookmarkPage from "./components/pages/BookmarkPage";
import HomePage from "./components/pages/HomePage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.css"


function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/bookmark" element={<BookmarkPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
