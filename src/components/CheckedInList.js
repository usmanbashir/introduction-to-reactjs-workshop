import React, { Component } from 'react';
import CheckedInListItem from './CheckedInListItem';

export default class CheckedInList extends Component {
  render() {
    const guests = this.props.people.map(person => {
      return(
        <CheckedInListItem 
          name={person}
          key={Math.random()}
          removeGuest={this.props.removeGuest}
          />
      )
    });

    return(
      <div className="row checkedIn-list">
        <div className="col s12">
          <h3>Checked In: ({this.props.people.length})</h3>
            <ul className="collection">
              {guests}
            </ul>
        </div>
      </div>
    )
  }
}