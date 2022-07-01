import { Component } from "react";
import Waveform from "../../Waveform/Waveform";
import avatar from "../../../assets/images/test-avatar.png";
import axios from "axios";

import "./TracksView.scss";

class TracksView extends Component {
  state = {
    selectedTrack: null,
    selectedTrackStems: []

  };
  track_id = this.props.match.params.id;

  testUrl =
    "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3";

  componentDidMount() {
    axios.get(`http://localhost:8080/tracks/${this.track_id}`).then((response) => {
      console.log(response.data.track)
      this.setState({
        selectedTrack: response.data.track,
        selectedTrackStems: response.data.stems
      })
    })
  }

  render() {
    return !this.state.selectedTrack ? "Loading" :
    (
      <>
        <section className="tracksview">
          <h1 className="tracksview__heading">View</h1>
          <div className="tracksview__selected">
            <div className="tracksview__waveform">
              <img
                src={this.state.selectedTrack.image_url}
                alt="user avatar"
                className="tracksview__image"
              ></img>
              <Waveform url={this.state.selectedTrack.audio_url} />
            </div>
            <div className="tracksview__details">
              <div className="tracksview__details-section">
                <p className="tracksview__title">Title</p>
                <p className="tracksview__content">{this.state.selectedTrack.title}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">Producer</p>
                <p className="tracksview__content">{this.state.selectedTrack.name}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">BPM</p>
                <p className="tracksview__content">{this.state.selectedTrack.BPM}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">Notes</p>
                <p className="tracksview__content">
                {this.state.selectedTrack.caption}
                </p>
              </div>
            </div>
            <div className="tracksview__stems stems">
              <h2 className="stems__title">Stems</h2>
              <section className="stems__files-container">

                {/* <a href="/images/myw3schoolsimage.jpg" download={origName}>{fileName}</a> */}
                {this.state.selectedTrackStems.map((file) => {
                  return (
                    <a
                    className="stems__file"
                    download="foo.txt"
                    target="_blank"
                    href={file.file}
                    key={file.id}
                  >
                    {file.name}
                  </a>
                  )
                })}
              </section>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TracksView;
