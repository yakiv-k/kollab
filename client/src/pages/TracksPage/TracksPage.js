import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import { Component } from "react";
import axios from "axios";

import "./TracksPage.scss";

class TracksPage extends Component {
  state = {
    tracks: [],
    activeClass: false,
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
    let likedBool = "";

    if (liked === 1) {
      likedBool = 0;
      this.setState({
        activeClass: true
      })
    } else if (liked === 0) {
      likedBool = 1;
      this.setState({
        activeClass: false
      })
    }

    axios.patch("http://localhost:8080/tracks", {
      liked: likedBool,
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
            isActive={this.state.activeClass}
          />
        </section>
      </>
    );
  }
}

export default TracksPage;
