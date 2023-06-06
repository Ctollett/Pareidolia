import React from "react";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import BlogSection from "./components/BlogSection"
import BlogPost from "./components/BlogPost"
import { ParallaxProvider } from 'react-scroll-parallax';




export default function App() {

    return(
        <ParallaxProvider>
         <Router>
        <div className="App">
              
            <div className="content">
                <Switch>
                    <Route exact path={"/"}>
                   <Home />
                    </Route>
                    <Route path={"/work"}>  
                        <Work />
                    </Route>
                    <Route path={"/about"}>
                        <About />
                    </Route> 
                    <Route path="/work/:id"/>
                </Switch>
            </div>
        </div>
        </Router>
    </ParallaxProvider>
    )
}