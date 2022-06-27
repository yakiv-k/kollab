import avatar from "../../../assets/images/test-avatar.png";
import Waveform from "../../Waveform/Waveform";

import "./TracksFeed.scss";

function TracksFeed() {
  const testUrl =
    "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3";

  return (
    <>
      <div className="tracksfeed">
        <h2 className="tracksfeed__title">Latest</h2>
        <div className="card__container">
          <div className="card">
            <div className="card__content">
              <div className="card__info">
                <img className="card__image" alt="user avatar" src={avatar}></img>
                <div className="card__text-container">
                  <p className="card__text card__text--bold">LightSLMN</p>
                  <p className="card__text">In Da Club</p>
                </div>
              </div>
              <Waveform url={testUrl} />
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <div className="card__info">
                <img className="card__image" alt="user avatar" src={avatar}></img>
                <div className="card__text-container">
                  <p className="card__text card__text--bold">YungMichael</p>
                  <p className="card__text">K#1!</p>
                </div>
              </div>
              <Waveform url={testUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TracksFeed;
