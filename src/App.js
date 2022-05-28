import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends React.Component {
  render() {
      return (
        <div className="App container my-5">
           
           <div className="row">

            <div className="col-3 bg-warning">
              First in DOM, no order applied
              <nav>
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/about">About</Link></h3>
                <h3><Link to="/contact">Contact</Link></h3>
              </nav>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
          


            </div>
            <div className="col bg-secondary">
              Second in DOM, with a larger order

              <Home />




            </div> {/* 2nd col end*/}

          </div> {/* End of Row container*/}
\

          </div>
          );
  }
}

export default App;