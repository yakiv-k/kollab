import React from "react";
// import { useState } from "react";

import "./Upload.js";

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
        <div onSubmit={this.handleFilesUpload} className="upload">
          <form className="upload__form">
            <label>Add image</label>
            <input onChange={this.handleImageChange}></input>
            <label>Add Project Files</label>
            <input onChange={this.handleFileChange}></input>
          </form>
        </div>
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
