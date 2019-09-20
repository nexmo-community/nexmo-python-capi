import React from "react";
import Tabs from "./Tabs";

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.conversation) {
      return null;
    }
    return (
      <div>
        <article className="message is-info">
          <div className="message-header">
            <p>{this.props.conversation.uuid}</p>
          </div>
          <div className="message-body">
            <ul>
              <li>Name: {this.props.conversation.name}</li>
              <li>ttl: {this.props.conversation.properties.ttl}</li>
              <li>Timestamp: {this.props.conversation.timestamp.created}</li>
            </ul>
          </div>
        </article>
        <Tabs
          members={this.props.conversation.members}
          events={this.props.events}
          conversation={this.props.conversation}
        />
      </div>
    );
  }
}
export default Conversation;
