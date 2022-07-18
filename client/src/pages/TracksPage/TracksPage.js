import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";

import "./TracksPage.scss";

class TracksPage extends Component {
  state = {
    tracks: [],
    activeClass: null,
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
      // this.setState({
      //   activeClass: false,
      // });
    } else if (liked === 0) {
      likedBool = 1;
      // this.setState({
      //   activeClass: true,
      // });
    }

    axios.patch("http://localhost:8080/tracks", {
      liked: likedBool,
      id: idValue,
    });
  };

  render() {
    return (
      <>
        <Header />
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
