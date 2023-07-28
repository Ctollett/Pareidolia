import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import BlogSection from "../components/BlogSection";
import BlogPost from "../components/BlogPost";
import BlogHeader from "../components/BlogHeader"
import FeaturedWork from "../components/FeaturedWork";


function Work() {



  return (
 
    <>
      <Switch>
        <Route exact path="/work" component={BlogSection} />
        <Route path="/work/:id/:title" component={BlogPost} />
      </Switch>
    </>

  );
}

export default Work;