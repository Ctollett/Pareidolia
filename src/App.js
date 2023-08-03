import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocomotiveScrollProvider, Scroll, useLocomotiveScroll } from 'react-locomotive-scroll';
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import BlogPost from "./components/BlogPost"



export default function App() {

    
  return (
      <Router>
          <div className="App">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}>
                  <Home />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="/about">  
                  <About />   
                </Route>
                <Route path="/contact">  
                  <Contact />   
                </Route>
                <Route path="/work/:id" component={Work}/>
                <Route path="/blog/:id" component={BlogPost} /> {/* New route for BlogPost */}
              </Switch>
            </div>
          </div>
      </Router>   
    );
  }


