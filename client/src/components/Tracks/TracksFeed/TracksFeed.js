import Waveform from "../../Waveform/Waveform";
import TracksView from "../TracksView/TracksView";

import { Link } from "react-router-dom";


import "./TracksFeed.scss";

function TracksFeed({ tracksList }) {

  return (
    <>
      <div className="tracksfeed">
        <h2 className="tracksfeed__title">Latest</h2>
        <div className="track__container">
          {tracksList.map((track) => {
           return (
            <div className="track" key={track.id}>
            <div className="track__content">
              <div className="track__info">
                <img
                  className="track__image"
                  alt="user avatar"
                  src={track.image_url}
                ></img>
                <div className="track__text-container">
                  <Link to={`/producer/${track.producer_id}`} className="track__text track__text--bold">{track.name}</Link>
                  <Link to={`/tracks/${track.id}`} className="track__text">{track.title}</Link>
                </div>
              </div>
              <Waveform url={track.audio_url} />
            </div>
          </div>
           )
          })}
        </div>
      </div>
    </>
  );
}

export default TracksFeed;
