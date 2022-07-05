import { Component } from "react";
import axios from "axios";
// import { useState } from "react";

import "./Upload.scss";
import { Link } from "react-router-dom";

class Upload extends Component {
  state = {
    projectStemFiles: null,
    projectImage: "",
    track: null,
    // isUploaded: false
  };

  // GRAB PROJECT FILE(S)
  handleFileChange = (event) => {
    event.preventDefault();
    this.setState({
      projectStemFiles: event.target.files,
    });
  };

  // GRAB IMAGE FILE
  handleImageChange = (event) => {
    event.preventDefault();
    this.setState({
      projectImage: event.target.files,
    });
  };

  // GRAB TRACK
  handleTrackChange = (event) => {
    event.preventDefault();
    this.setState({
      track: event.target.files,
    });
  };
  handleFilesUpload = (event) => {
    event.preventDefault();

    // NEW INSTANCE
    const formData = new FormData();

    formData.append("name", event.target.name.value);
    formData.append("title", event.target.title.value);
    formData.append("bpm", event.target.bpm.value);
    formData.append("caption", event.target.bpm.value);

    for (const file of this.state.projectImage) {
      formData.append("image", file);
    }
    // for (const file of this.state.track) {
    //   formData.append("track", file);
    // }
    Object.values(this.state.track).map((file) => {
      formData.append("track", file);
    });
    Object.values(this.state.projectStemFiles).map((file) => {
      formData.append("stems", file);
    });

    const token = sessionStorage.getItem("token");

    axios
      .post(
        "http://localhost:8080/tracks",
        formData, 
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        {
          header: { "Content-Type": "multipart/form-data" },
        }
      )
      .catch((err) => {
        console.log(err);
      });

    // this.setState({
    //   isUploaded: true
    // });

    // setTimeout(() => {
    //   this.props.history.push("/tracks");
    // }, 1000);
  };

  // componentDidUpdate() {
  //   if (this.state.isUploaded === true) {
  //     setTimeout(() => {
  //       this.props.history.push("/tracks");
  //     }, 2000);
  //   }
  // }

  render() {
    return (
      <>
        <section onSubmit={this.handleFilesUpload} className="upload">
          <h1 className="upload__title">Share</h1>
          <div className="upload__content">
            <form className="upload__form form" encType="multipart/form-data">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__input"
                placeholder="Enter a name"
                type="text"
                name="name"
                id="name"
              ></input>
              <label className="form__label" htmlFor="title">
                Title
              </label>
              <input
                className="form__input"
                placeholder="Enter a title"
                type="text"
                name="title"
                id="title"
              ></input>
              <label className="form__label" htmlFor="bpm">
                BPM
              </label>
              <input
                className="form__input"
                placeholder="Enter track BPM"
                type="text"
                name="bpm"
                id="bpm"
              ></input>
              <label className="form__label" htmlFor="caption">
                Caption
              </label>
              <input
                className="form__input"
                placeholder="Enter a caption"
                type="text"
                name="caption"
                id="caption"
              ></input>
              <label className="form__label">Choose track</label>
              <input
                className="form__input form__input--padding"
                type="file"
                name="track"
                id="track"
                accept=".wav, .mp3"
                onChange={this.handleTrackChange}
              ></input>
              <label className="form__label">Add image</label>
              <input
                className="form__input form__input--padding"
                type="file"
                name="image"
                id="image"
                // accept="image/jpeg, image/png"
                accept=".jpeg, .jpg, .png"
                onChange={this.handleImageChange}
              ></input>
              <label className="form__label">Add project files</label>
              <input
                className="form__input form__input--padding"
                type="file"
                name="stems"
                id="stems"
                accept=".wav, .mp3"
                multiple="multiple"
                onChange={this.handleFileChange}
              ></input>
              {/* <Link to="/tracks"> */}
              <button className="form__button">Upload</button>
              {/* </Link> */}
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Upload;

// function Upload() {
//     // const [stems, setStems] = useState(null);

//     const handleUpload = ((event) => {
//         event.prevenDefault();

//     })

//   return (
//     <>
//       <div className="upload__form"></div>
//     </>
//   );
// }

// export default Upload;
