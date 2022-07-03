import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage";
import TracksPage from "./pages/TracksPage/TracksPage";
import TracksView from "./components/Tracks/TracksView/TracksView";
import ProducerPage from "./pages/ProducerPage/ProducerPage";
import UploadPage from "./pages/UploadPage/UploadPage";

// import axios from "axios";

import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/tracks" exact component={TracksPage}></Route>
          <Route path="/tracks/:id" component={TracksView}></Route>
          <Route path="/producers/:id" component={ProducerPage}></Route>
          <Route path="/upload" component={UploadPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
