import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocomotiveScrollProvider, Scroll, useLocomotiveScroll } from 'react-locomotive-scroll';
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";


export default function App() {
    const options = {
      smooth: true,
      multiplier: 0.5
    };

    
  return (
      <Router>
          <div className="App">
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="/about">
                  <About />   
                </Route>
                <Route path="/work/:id" />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }


