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
        this.setState({
          tracks: response.data,
        });
      });
  }

  handleLike = (liked, idValue) => {
    let tinyIntVal = "";
    console.log(liked, idValue);

    if (liked === 1) {
      return (tinyIntVal = 0);
    } else if (liked === 1) {
      tinyIntVal = 0;
    }

    axios.patch("http://localhost:8080/tracks", {
      liked: tinyIntVal,
      id: idValue,
    });
  };

  render() {
    return (
      <>
        <section className="tracks">
          <TracksFeed
            toggleLike={this.handleLike}
            tracksList={this.state.tracks}
          />
        </section>
      </>
    );
  }
}

export default TracksPage;
