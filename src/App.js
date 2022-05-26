import React, {Component} from 'react'
import Home from "./pages/homepage";
import { HashRouter, Route, Switch } from "react-router-dom";

import About from "./pages/portfolio";
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
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    </div>
    )
  }
}


export default App