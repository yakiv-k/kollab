import Waveform from "../Waveform/Waveform";
import { Link } from "react-router-dom";

import "./Profile.scss";

function Profile({ userProfile, likedTracks }) {
  return (
    <>
      <section className="profile-page">
        <h1 className="profile-page__name">Yasha</h1>
        <div className="profile-page__info info">
          <div className="info__layout">
            <div className="info__subdivision info__subdivision--left">
              <img className="info__image" src={userProfile.image_url}></img>
            </div>
            <div className="info__subdivision info__subdivision--right">
              <div className="info__details">
                <p className="info__title">Contact</p>
                <p className="info__text">{userProfile.contact}</p>
              </div>
            </div>
          </div>
          <div className="info__liked liked">
            <h2 className="liked__heading">Liked</h2>
            <article className="liked__content">
              {likedTracks.map((track) => {
                return (
                  <div className="liked__card card" key={track.id}>
                    <div className="card__content">
                      <div className="card__info">
                        <img
                          className="card__image"
                          alt="user avatar"
                          src={track.image_url}
                        ></img>
                        <div className="card__text-container">
                          <p className="card__text card__text--bold">
                            {track.name}
                          </p>
                          <Link
                            to={`/tracks/${track.id}`}
                            className="card__text"
                          >
                            {track.title}
                          </Link>
                        </div>
                      </div>
                      <Waveform url={track.audio_url} />
                    </div>
                  </div>
                );
              })}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
