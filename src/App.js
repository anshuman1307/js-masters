import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage.jsx";
import {HashRouter, Switch, Route, Link } from "react-router-dom";
import QuestionAnswer from "./components/QuestionAnswer.jsx";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="header">JS Masters</header>
        <nav></nav>
        <Switch>
          <Route path="/js-masters/details/:question/:id" component={QuestionAnswer}>
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
        </Switch>
             
      </div>
    </HashRouter>
  );
}

export default App;
