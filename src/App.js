import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import Page404 from "./pages/others/Page404";

function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-agency`}
            component={LandingPage}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
