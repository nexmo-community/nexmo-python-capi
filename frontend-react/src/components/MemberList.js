import React from "react";
import MemberDetail from "./MemberDetail";

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
    };
  }

  showMemberDetails = user_id => {
    fetch("/user?uid=" + user_id)
      .then(results => results.json())
      .then(data => {
        this.setState({ member: data });
      });
  };

  render() {
    return (
      <div>
        <div className="column is-one-fifth">
          <aside className="menu">
            <p className="menu-label">Members</p>
            <ul className="menu-list">
              {this.props.members.map(member => {
                return (
                  <li key={member.user_id}>
                    <a
                      href="#member"
                      onClick={() => this.showMemberDetails(member.user_id)}
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
        <MemberDetail member={this.state.member} />
      </div>
    );
  }
}
export default MemberList;
