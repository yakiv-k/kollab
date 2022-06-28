import { Component } from "react";
import axios from "axios";
// import { useState } from "react";

import "./Upload.scss";

class Upload extends Component {
  state = {
    projectStemFiles: null,
    projectImage: null,
  };

  // GRAB PROJECT FILE(S)
  handleFileChange(event) {
    event.preventDefault();

    this.setState({
      projectStemFiles: event.target.files,
    });
  }

  // GRAB IMAGE FILE
  handleImageChange(event) {
    event.preventDefault();

    this.setState({
      projectImage: event.target.files,
    });
  }

  handleFilesUpload(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append(this.state.projectStemFiles);
    formData.append(this.state.projectImage);

    axios.post("testURL", formData).catch((err) => {
      console.log("error");
    });
  }

  render() {
    return (
      <>
        <section onSubmit={this.handleFilesUpload} className="upload">
          <h1 className="upload__title">Share</h1>
          <div className="upload__content">
            {/* <h2>Add</h2> */}
            <form className="upload__form form">
              <label className="form__label">Title</label>
              <input
                className="form__input"
                placeholder="Enter a title"
                type="text"
                name="title"
                id="title"
                onChange={this.handleImageChange}
              ></input>
              <label className="form__label">Caption</label>
              <input
                className="form__input"
                placeholder="Enter a caption"
                type="text"
                name="caption"
                id="caption"
                onChange={this.handleImageChange}
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
                name="stem"
                id="stem"
                accept=".wav"
                multiple="multiple"
                onChange={this.handleFileChange}
              ></input>
              <button className="form__button">Upload</button>
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
