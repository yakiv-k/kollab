import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";

import "./TracksPage.scss";

class TracksPage extends Component {
  state = {
    tracks: [],
    // likeUpdate: 0
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
      //   likeUpdate: 0
      // })
    } else if (liked === 0) {
      likedBool = 1;
      // this.setState({
      //   likeUpdate: 1
      // })
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
            // likeUpdate={this.state.likeUpdate}
          />
        </section>
      </>
    );
  }
}

export default TracksPage;
