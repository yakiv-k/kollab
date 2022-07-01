import Waveform from "../Waveform/Waveform";
import avatar from "../../assets/images/test-avatar.png";

import "./ProducerProfile.scss";

function ProducerProfile({ selectedProducer, selectedProducerTracks }) {
  const testUrl =
    "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3";

  return !selectedProducer ? (
    "Loading"
  ) : (
    <>
      <section className="producer">
        <h1 className="producer__name">{selectedProducer.name}</h1>
        <div className="producer__profile profile">
          <div className="profile__layout">
            <div className="profile__subdivision profile__subdivision--left">
              <img className="producer__image" src={avatar}></img>
            </div>
            <div className="profile__subdivision profile__subdivision--right">
              <div className="profile__details">
                <p className="profile__title">Contact</p>
                <p className="profile__text">{selectedProducer.contact}</p>
              </div>
            </div>
          </div>
          <div className="profile__catalogue catalogue">
            <h2 className="catalogue__heading">Catalogue</h2>
            <article className="catalogue__content">
              {selectedProducerTracks.map((track) => {
                return (
                  <div className="catalogue__card card" key={track.id}>
                    <div className="card__content">
                      <div className="card__info">
                        {/* <img className="card__image" alt="user avatar" src={avatar}></img> */}
                        <div className="card__text-container">
                          <p className="card__text card__text--bold">
                            {track.name}
                          </p>
                          <p className="card__text">{track.title}</p>
                        </div>
                      </div>
                      <Waveform url={testUrl} />
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

export default ProducerProfile;
