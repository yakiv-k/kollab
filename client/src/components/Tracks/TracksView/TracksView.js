import { useState, useEffect } from "react";
import Waveform from "../../Waveform/Waveform";
import Header from "../../Header/Header";
import returnIcon from "../../../assets/icons/chevron-left.svg";
import axios from "axios";

import "./TracksView.scss";

function TracksView(props) {
  // const [loading, setLoading] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackStems, setSelectedTrackStems] = useState([]);

  const track_id = props.match.params.id;

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tracks/${track_id}`
        );
        setSelectedTrack(response.data.track);
        setSelectedTrackStems(response.data.stems);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchData();
  }, []);

    const handleGoBack = () => {
    props.history.goBack();
  };

  return !selectedTrack ? (
    "Loading"
  ) : (
    <>
      <Header />
      <div className="tracksview-container">
        <section className="tracksview">
          <h1 className="tracksview__heading">View</h1>

          <div className="tracksview__selected">
            <img
              onClick={handleGoBack}
              src={returnIcon}
              className="tracksview__icon"
            ></img>
            <div className="tracksview__waveform">
              <img
                src={selectedTrack.image_url}
                alt="user avatar"
                className="tracksview__image"
              ></img>
              <Waveform
                likedValue={selectedTrack.liked}
                url={selectedTrack.audio_url}
              />
            </div>
            <div className="tracksview__details">
              <div className="tracksview__details-section">
                <p className="tracksview__title">Title</p>
                <p className="tracksview__content">{selectedTrack.title}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">Producer</p>
                <p className="tracksview__content">{selectedTrack.name}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">BPM</p>
                <p className="tracksview__content">{selectedTrack.BPM}</p>
              </div>
              <div className="tracksview__details-section">
                <p className="tracksview__title">Notes</p>
                <p className="tracksview__content">{selectedTrack.caption}</p>
              </div>
            </div>
            <div className="tracksview__stems stems">
              <h2 className="stems__title">Stems</h2>
              <section className="stems__files-container">
                {selectedTrackStems.map((file) => {
                  return (
                    <a
                      className="stems__file"
                      download={file.files}
                      target="_blank"
                      href={file.files}
                      key={file.id}
                    >
                      {file.name}
                    </a>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TracksView;

// class TracksView extends Component {
//   state = {
//     selectedTrack: null,
//     selectedTrackStems: [],
//   };

//   track_id = this.props.match.params.id;

//   handleGoBack = () => {
//     this.props.history.goBack();
//   };

//   componentDidMount() {
// axios
// .get(`http://localhost:8080/tracks/${this.track_id}`)
//   .then((response) => {
//     this.setState({
//       selectedTrack: response.data.track,
//       selectedTrackStems: response.data.stems,
//     });
//   });
//   }

//   render() {
//     return !this.state.selectedTrack ? (
//       "Loading"
//     ) : (
//       <>
// <Header />
//   <div className="tracksview-container">
//     <section className="tracksview">
//       <h1 className="tracksview__heading">View</h1>

//       <div className="tracksview__selected">
//         <img
//           onClick={this.handleGoBack}
//           src={returnIcon}
//           className="tracksview__icon"
//         ></img>
//         <div className="tracksview__waveform">
//           <img
//             src={this.state.selectedTrack.image_url}
//             alt="user avatar"
//             className="tracksview__image"
//           ></img>
//           <Waveform likedValue={this.state.selectedTrack.liked} url={this.state.selectedTrack.audio_url} />
//         </div>
//         <div className="tracksview__details">
//           <div className="tracksview__details-section">
//             <p className="tracksview__title">Title</p>
//             <p className="tracksview__content">
//               {this.state.selectedTrack.title}
//             </p>
//           </div>
//           <div className="tracksview__details-section">
//             <p className="tracksview__title">Producer</p>
//             <p className="tracksview__content">
//               {this.state.selectedTrack.name}
//             </p>
//           </div>
//           <div className="tracksview__details-section">
//             <p className="tracksview__title">BPM</p>
//             <p className="tracksview__content">
//               {this.state.selectedTrack.BPM}
//             </p>
//           </div>
//           <div className="tracksview__details-section">
//             <p className="tracksview__title">Notes</p>
//             <p className="tracksview__content">
//               {this.state.selectedTrack.caption}
//             </p>
//           </div>
//         </div>
//         <div className="tracksview__stems stems">
//           <h2 className="stems__title">Stems</h2>
//           <section className="stems__files-container">
//             {this.state.selectedTrackStems.map((file) => {
//               return (
//                 <a
//                   className="stems__file"
//                   download={file.files}
//                   target="_blank"
//                   href={file.files}
//                   key={file.id}
//                 >
//                   {file.name}
//                 </a>
//               );
//             })}
//           </section>
//         </div>
//       </div>

//     </section>
//   </div>
//       </>
//     );
//   }
// }

// export default TracksView;
