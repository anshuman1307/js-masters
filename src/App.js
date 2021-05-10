import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage.jsx";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import QuestionAnswer from "./components/QuestionAnswer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import backarrow from "./arrow-left-solid.svg";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <HashRouter>
      <>
        <Switch>
          <Route
            path="/js-masters/details/:question/:id"
            component={QuestionAnswer}
          ></Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
