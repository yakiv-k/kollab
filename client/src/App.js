import { BrowserRouter, Switch, Route } from "react-router-dom";
import TracksPage from "./pages/TracksPage/TracksPage";
import Header from "./components/Header/Header/Header";
import "./styles/App.scss";
import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/tracks" exact component={TracksPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
