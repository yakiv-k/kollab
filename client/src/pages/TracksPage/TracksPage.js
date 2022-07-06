import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import { Component } from "react";
import axios from "axios";

import "./TracksPage.scss";

class TracksPage extends Component {
  state = {
    tracks: [],
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:8080/tracks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(token);
        this.setState({
          tracks: response.data,
        });
      });
  }

  render() {
    return (
      <>
        <section className="tracks">
          <TracksFeed tracksList={this.state.tracks} />
        </section>
      </>
    );
  }
}

export default TracksPage;
