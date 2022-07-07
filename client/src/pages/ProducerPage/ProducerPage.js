import { Component } from "react";
import ProducerProfile from "../../components/ProducerProfile/ProducerProfile";
import Header from "../../components/Header/Header";
import axios from "axios";

import "./ProducerPage.scss";

class ProducerPage extends Component {
  state = {
    selectedProducer: null,
    selectedProducerTracks: [],
  };

  producer_id = this.props.match.params.id;

  componentDidMount() {
    axios.get(`http://localhost:8080/producers/${this.producer_id}`).then((response) => {
        console.log(response.data);
      this.setState({
        selectedProducer: response.data.producer,
        selectedProducerTracks: response.data.tracks
      });
    });
  }

  render() {
    return (
      <>
      <Header />
      <section className="producer-profile">
        <ProducerProfile selectedProducer={this.state.selectedProducer} selectedProducerTracks={this.state.selectedProducerTracks}/>
      </section></>
    );
  }
}
export default ProducerPage;
