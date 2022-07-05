import axios from "axios";
import { Component } from "react";
import Profile from "../../components/Profile/Profile";

import "./ProfilePage.scss";

class ProfilePage extends Component {
  state = {
    profileData: [],
    likedData: [],
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:8080/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          profileData: response.data.profile,
          likedData: response.data.likedTracks,
        });
      });
    console.log(this.state.profileData);
  }

  render() {
    return (
      <Profile
        userProfile={this.state.profileData}
        likedTracks={this.state.likedData}
      />
    );
  }
}

export default ProfilePage;
