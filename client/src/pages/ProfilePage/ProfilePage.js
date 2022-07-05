// import axios from "axios";
// import { Component } from "react";
// import Profile from "../../components/Profile/Profile";

// import "./ProfilePage.scss";

// class ProfilePage extends Component {
//   state = {
//     likeTracks: [],
//   };

//   componentDidMount() {
//     axios.get("http://localhost:8080/profile").then((response) => {
//       const tracks = response.data;
//       const liked = tracks.filter((track) => {
//         return track.liked === false;
//       });
//       this.setState({
//         likedTracks: liked,
//     });
//     });
//   }

//   render() {
//     return <Profile liked={this.state.likeTracks}/>;
//   }
// }

// export default ProfilePage;
