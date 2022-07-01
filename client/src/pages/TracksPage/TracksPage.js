import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import { Component } from "react";
import axios from "axios";


import "./TracksPage.scss";

class TracksPage extends Component {

  state = {
    tracks: []
  }

  componentDidMount() {
    axios.get("http://localhost:8080/tracks").then((response) => {
      // console.log(response.data)
      this.setState({
        tracks: response.data
      })
    })
  }
  

  render() {

    return (
      <>
        <section className="tracks">
          <TracksFeed tracksList={this.state.tracks}/>
        </section>
      </>
    );
  }
}

export default TracksPage;
