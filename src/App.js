import React from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import { Switch, Route, BrowserRouter  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/Resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
