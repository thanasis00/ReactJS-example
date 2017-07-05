import React from 'react';

export default class User extends React.Component {

  //dynamically generate markup with all the available keys
  getUserAttrs() {
    let attrs = [];
    for (const k in this.props.data) {
      if(this.props.data.hasOwnProperty(k)) {
        attrs.push(`<div><strong>${k}</strong>: ${this.props.data[k]}</div>`);
      }
    }
    return attrs;
  }

  //in order to render unsafe html
  renderHtml(markup) {
    return {__html: markup};
  }

  //render html and add separators between items
  renderUserAttrs(attrs) {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.renderHtml(attrs.join(""))} />
        <br /><br />
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderUserAttrs(this.getUserAttrs()) }
      </div>
    );
  }
}

