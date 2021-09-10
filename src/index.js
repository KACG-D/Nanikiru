import ReactDOM from "react-dom";
import store from "./store";
import { Top, ProblemPage } from "./pages";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.scss";
import { Page } from "./modules/Page";

const rootElement = document.getElementById("root");

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Page pageTitle="なにきる">
        <Switch>
          <Route path="/problem">
            <ProblemPage />
          </Route>
          <Route path="/users">
            <Top />
          </Route>
          <Route path="/">
            <Top />
          </Route>
        </Switch>
      </Page>
    </BrowserRouter>
  </Provider>,
  rootElement
);
