import React from "react";

class MemberDetail extends React.Component {
  render() {
    if (!this.props.member) {
      return null;
    }
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img
                    src="https://api.adorable.io/avatars/96/{this.props.member.id}.png"
                    className="is-rounded"
                    alt="Avatar"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.member.name}</p>
                <p className="subtitle is-6">
                  {this.props.member.channels.pstn[0].number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MemberDetail;
