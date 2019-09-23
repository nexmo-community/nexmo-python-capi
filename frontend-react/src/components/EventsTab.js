import React from "react";

class EventsTab extends React.Component {
  render() {
    if (!this.props.events) {
      return null;
    }
    const tabClass =
      this.props.activeTab === "events" ? "section" : "section is-hidden";
    return (
      <section className={tabClass}>
        <div className="container">
          {this.props.events.map(event => {
            return (
              <article className="message is-info" key={event.id}>
                <div className="message-header">
                  <p>
                    {event.id} - {event.timestamp}
                  </p>
                </div>
                <div className="message-body">
                  <p>{event.href}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default EventsTab;
