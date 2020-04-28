import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
