import "./HomePage.scss";
import axios from "axios";
import { Component } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const loginUrl = `http://localhost:8080/login`;
const signupUrl = `http://localhost:8080/signup`;

class HomePage extends Component {
  state = {
    isSignedUp: false,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
    image: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(loginUrl, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        this.setState({
          isLoggedIn: true,
        });
      })
      .catch((err) => {
        this.setState({ isLoginError: true, errorMessage: err });
      });
  };

  handleRegistered = (e) => {
    e.preventDefault();

    this.setState({
      isSignedUp: true,
    });
  };

  handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(signupUrl, {
        name: e.target.name.value,
        contact: e.target.contact.value,
        avatar: e.target.image.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        this.setState({
          isSignedUp: true,
        });
      })
      .catch((err) => console.log(err));
  };

  renderSignUp() {
    return (
      <Signup handleImage={this.handleImageChange} signUp={this.handleSignup} registered={this.handleRegistered} />
    );
  }

  renderLogin = () => {
    const { isLoginError, errorMessage } = this.state;
    return (
      <Login
        login={this.handleLogin}
        loginError={isLoginError}
        error={errorMessage}
      />
    );
  };

  // GRAB IMAGE FILE
  handleImageChange = (event) => {
    event.preventDefault();
    this.setState({
      image: event.target.files,
    });
  };

  render() {
    const { isLoggedIn, isSignedUp } = this.state;

    // Handle Signup/Login
    if (!isSignedUp) return this.renderSignUp();
    if (!isLoggedIn) return this.renderLogin();

    if (isSignedUp && isLoggedIn) {
      this.props.history.push("/tracks");
      // setTimeout(() => {
      //   this.props.history.push("/tracks");
      // }, 2000);
    }

    return <></>;
  }
}

export default HomePage;
