import React from "react";
import Conversation from "./Conversation";

class Conversations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showConversationDetails = cid => {
    fetch("/conversation?cid=" + cid)
      .then(results => results.json())
      .then(data => {
        this.setState({ conversation: data });
      });
  };

  fetchConversationEvents = cid => {
    fetch("/events?cid=" + cid)
      .then(results => results.json())
      .then(data => {
        this.setState({ events: data });
      });
  };

  fetchConversationDetail = cid => {
    this.showConversationDetails(cid);
    this.fetchConversationEvents(cid);
  };

  render() {
    return (
      <div>
        <div className="column is-one-quarter">
          <aside className="menu">
            <p className="menu-label">Conversations</p>
            <ul className="menu-list">
              {this.props.conversations.map(conversation => {
                return (
                  <li key={conversation.uuid}>
                    <a
                      href="#conversation"
                      onClick={() =>
                        this.fetchConversationDetail(conversation.uuid)
                      }
                    >
                      {conversation.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
        <div className="column">
          <Conversation
            conversation={this.state.conversation}
            events={this.state.events}
          />
        </div>
      </div>
    );
  }
}
export default Conversations;
