import React from "react";
import MemberTab from "./MemberTab";
import EventsTab from "./EventsTab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: "members",
      members: this.props.members,
      events: this.props.events
    };
  }

  refreshMembers = () => {
    fetch("/conversation?cid=" + this.props.conversation.uuid)
      .then(results => results.json())
      .then(data => {
        this.setState({ members: data.members });
      });
  };

  refreshEvents = () => {
    fetch("/events?cid=" + this.props.conversation.uuid)
      .then(results => results.json())
      .then(data => {
        this.setState({ events: data });
      });
  };

  render() {
    const membersClass =
      this.state.tabSelected === "members" ? "is-active" : "";
    const eventsClass = this.state.tabSelected === "events" ? "is-active" : "";
    return (
      <div>
        <div className="tabs is-boxed">
          <ul>
            <li className={membersClass}>
              <a
                href="#member"
                onClick={() => {
                  this.setState({ tabSelected: "members" });
                  this.refreshMembers();
                }}
              >
                <span className="icon is-small">
                  <i className="fas fa-user"></i>
                </span>
                Members
              </a>
            </li>
            <li className={eventsClass}>
              <a
                href="#event"
                onClick={() => {
                  this.setState({ tabSelected: "events" });
                  this.refreshEvents();
                }}
              >
                <span className="icon is-small">
                  <i className="fab fa-elementor"></i>
                </span>
                Events
              </a>
            </li>
          </ul>
        </div>
        <MemberTab
          activeTab={this.state.tabSelected}
          members={this.state.members}
        />
        <EventsTab
          activeTab={this.state.tabSelected}
          events={this.state.events}
        />
      </div>
    );
  }
}
export default Tabs;
