import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/Main/Main";
import PlanetPage from "./pages/Planet/Planet";
import DefaultTheme from "./theme/default";

function App() {
  return (
    <MuiThemeProvider theme={DefaultTheme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/home" component={MainPage} />
            <Route path="/planet/:planet" exact component={PlanetPage} />
            <Route exact path="">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Layout>
        ;
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
