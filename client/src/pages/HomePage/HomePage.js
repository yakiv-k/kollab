import "./HomePage.scss";
import axios from "axios";
import { Component } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";

const baseUrl = "http://localhost:8080";
const loginUrl = `${baseUrl}/login`;
const signupUrl = `${baseUrl}/signup`;

class HomePage extends Component {
  state = {
    isSignedUp: true,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post(loginUrl, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
        this.setState({
          isLoggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoginError: true, errorMessage: err });
      });
  };

  handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(signupUrl, {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          isSignedUp: true,
        });
      })
      .catch((err) => console.log(err));
  };

  renderSignUp() {
    return (
     <Signup signUp={this.handleSignup}/>
    );
  }

  renderLogin = () => {
    const { isLoginError, errorMessage } = this.state;
    return (
    <Login login={this.handleLogin} loginError={isLoginError} error={errorMessage}/>
    );
  };

  render() {
    const { isLoggedIn, isSignedUp } = this.state;

    // Handle the Signup/Login
    if (!isSignedUp) return this.renderSignUp();
    if (!isLoggedIn) return this.renderLogin();

    if (isSignedUp && !isLoggedIn) {
      setTimeout(() => {
        this.props.history.push("/tracks");
      }, 2000);
    }

    return (
      <>
      </>
    );
  }
}

export default HomePage;