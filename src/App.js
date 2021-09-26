import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Redirect, Switch, useLocation} from "react-router-dom";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import NotFound from "./components/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    
      <div className="App">
        <div className="container app__container">
          <div className="row app_row">
            <div className="col-lg-3 app_sidebar-content">
              <Sidebar />
            </div>
            <div className="col-lg-9 app_main-content">
              {/* navbar  */}
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
