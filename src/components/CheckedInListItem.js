import React, { Component } from 'react';

export default class CheckedInListItem extends Component {
  render() {
    return(
      <li className="collection-item">
        <label onChange={this.remove.bind(this)}>
          <input type="checkbox" checked="checked" />
          <span>{this.props.name}</span>
        </label>
      </li>
    )
  }

  remove() {
    this.props.removeGuest(this.props.name);
  }
}