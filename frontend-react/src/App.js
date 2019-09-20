import React from "react";
import "./App.css";
import Conversations from "./components/Conversations";
import "bulma/css/bulma.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      conversation: []
    };

    fetch("/conversations").then(response =>
      response.json().then(
        data => {
          this.setState({ conversations: data._embedded.conversations });
        },
        err => console.log(err)
      )
    );
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="columns">
            <Conversations conversations={this.state.conversations} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
