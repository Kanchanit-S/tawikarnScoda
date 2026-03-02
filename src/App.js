import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const BlogVinyl = lazy(() => import("./pages/Blog/BlogVinyl"));
const Page404 = lazy(() => import("./pages/others/Page404"));

const PageLoader = () => (
  <div id="loader-overlay">
    <div className="loader-wrapper">
      <div className="scoda-pulse"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-agency`}
              component={LandingPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/ไวนิลคืออะไร`}
              component={BlogVinyl}
            />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
