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
          <div className="tracksview__stems stems">
            <h2 className="stems__title">Stems</h2>
            <section className="stems__files-container">
            {/* <a href="/images/myw3schoolsimage.jpg" download={origName}>{fileName}</a> */}
            <a className="stems__file" download="foo.txt" target="_blank" href="https://www.gravatar.com/avatar/281c2df7dbce9284dca6059db944f8df?s=48&d=identicon&r=PG">Kick.wav</a>
            <a className="stems__file" download="foo.txt" target="_blank" href="https://www.gravatar.com/avatar/281c2df7dbce9284dca6059db944f8df?s=48&d=identicon&r=PG">Clap.wav</a>
            <a className="stems__file" download="foo.txt" target="_blank" href="https://www.gravatar.com/avatar/281c2df7dbce9284dca6059db944f8df?s=48&d=identicon&r=PG">Hi_Hat.wav</a>

            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default TracksView;
