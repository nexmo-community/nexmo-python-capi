import React from "react";
import MemberList from "./MemberList";

class MemberTab extends React.Component {
  render() {
    const tabClass =
      this.props.activeTab === "members" ? "columns" : "columns is-hidden";
    return (
      <div className={tabClass}>
        <MemberList members={this.props.members} />
      </div>
    );
  }
}
export default MemberTab;
