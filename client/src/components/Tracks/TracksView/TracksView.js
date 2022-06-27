import Waveform from "../../Waveform/Waveform";
import avatar from "../../../assets/images/test-avatar.png";

import "./TracksView.scss";

function TracksView() {
  const testUrl =
    "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3";
  return (
    <>
      <section className="tracksview">
        <h1 className="tracksview__heading">View</h1>
        <div className="tracksview__selected">
          <div className="tracksview__waveform">
            <img src={avatar} alt="user avatar" className="tracksview__image"></img>
            <Waveform url={testUrl} />
          </div>
          <div className="tracksview__details">
            <div className="tracksview__details-section">
              <p className="tracksview__title">Title</p>
              <p className="tracksview__content">In Da Club</p>
            </div>
            <div className="tracksview__details-section">
              <p className="tracksview__title">Producer</p>
              <p className="tracksview__content">LightSLMN</p>
            </div>
            <div className="tracksview__details-section">
              <p className="tracksview__title">BPM</p>
              <p className="tracksview__content">160</p>
            </div>
            <div className="tracksview__details-section">
              <p className="tracksview__title">Notes</p>
              <p className="tracksview__content">
                Quick idea from the other night.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TracksView;
