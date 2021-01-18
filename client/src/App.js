import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path= "/" component={Search}/>
        <Route exact path= "/favorites" component={Favorites}/>
      </div>
    </Router>
  );
}

export default App;
