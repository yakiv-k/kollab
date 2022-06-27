import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import TracksPage from "./pages/TracksPage/TracksPage";
import TracksView from "./components/Tracks/TracksView/TracksView";

// import axios from "axios";

import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/tracks" exact component={TracksPage}></Route>
          <Route path="/tracks/view" component={TracksView}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
