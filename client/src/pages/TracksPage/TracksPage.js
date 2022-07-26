import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import Header from "../../components/Header/Header";
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
      .get("https://kollab-wav.herokuapp.com/tracks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          tracks: response.data,
        });
      });
  }

  // handleLike = (liked, idValue) => {
  //   let likedBool = "";

  //   if (liked === 1) {
  //     likedBool = 0;
  //     // this.setState({
  //     //   activeClass: "waveform__like-icon",
  //     // });
  //   } else if (liked === 0) {
  //     likedBool = 1;
  //     // this.setState({
  //     //   activeClass: "waveform__like-icon active",
  //     // });
  //   }

  //   axios.patch("http://localhost:8080/tracks", {
  //     liked: likedBool,
  //     id: idValue,
  //   });
  // };

  render() {
    return (
      <>
        <Header />
        <section className="tracks">
          <TracksFeed
            // toggleLike={this.handleLike}
            // tracksList={this.state.tracks}
          />
        </section>
      </>
    );
  }
}

export default TracksPage;
