import { Route, Switch } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import BlogPost from "../components/BlogPost";
import BlogHeader from "../components/BlogHeader"

function Work() {
  return (
    <>
      <Switch>
        <Route exact path="/work" component={BlogSection} />
        <Route path="/work/:postId/:title" component={BlogPost} />
      </Switch>
    </>
  );
}

export default Work;