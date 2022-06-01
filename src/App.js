import React, {Component} from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home-page";
import About from "./pages/about-page";
import Portfolio from "./pages/portfolio";
import Photos from "./pages/photos-page";
import NotFound from "./pages/not-found";

import ScrollToTop from './components/scrollToTop';


class App extends Component {
  render() {
    return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/photos" component={Photos} />
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    </div>
    )
  }
}


export default App