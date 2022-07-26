import axios from "axios";
import { Component } from "react";
import Profile from "../../components/Profile/Profile";
import Header from "../../components/Header/Header";

import "./ProfilePage.scss";

class ProfilePage extends Component {
  state = {
    profileData: [],
    likedData: [],
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    axios
      .get("https://kollab-wav.herokuapp.com/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          profileData: response.data.profile,
          likedData: response.data.likedTracks,
        });
      });
  }

  render() {
    return (
      <>
      <Header />
      <section className="profilepage">
        <Profile
          userProfile={this.state.profileData}
          likedTracks={this.state.likedData}
        />
      </section>
      </>
    );
  }
}

export default ProfilePage;
