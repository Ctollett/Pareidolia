import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import BlogPost from './pages/Work/BlogPost';
import Lenis from "@studio-freight/lenis"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import "./assets/globalstyles.css"

export default function App() {  

  
  return (
    <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route path="/work/:id" component={Work} />
              <Route path="/blog/:id" component={BlogPost} />
            </Switch>
          </div>
        </div>
    </Router>
  );
}      