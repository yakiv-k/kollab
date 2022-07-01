import { Component } from "react";
import ProducerProfile from "../../components/ProducerProfile/ProducerProfile";
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
        <ProducerProfile selectedProducer={this.state.selectedProducer} selectedProducerTracks={this.state.selectedProducerTracks}/>
      </>
    );
  }
}
export default ProducerPage;
