import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { createBrowserHistory } from "history";



function App() {
  const history = createBrowserHistory();
  return (
    <div>
      <Router history={history} basename="/my-react-portfolio">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Project />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
