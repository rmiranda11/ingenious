import React, { useState } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "../components/Nav"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Services from "../components/Services"
import Contact from "../components/Contact"
import * as ROUTES from "../constants/routes"

function App() {

  return (
    <Router>

      <div className="App">
      
          <Nav />

          {/* <Main /> */}


          <Route exact path={ROUTES.LANDING} component={Main} />
          <Route path={ROUTES.SERVICES} component={Services} />
          <Route path={ROUTES.CONTACT} component={Contact} />

          <Footer />

      </div>

    </Router>
  );
}

export default App;
