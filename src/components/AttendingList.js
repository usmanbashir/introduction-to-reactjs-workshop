import React, { Component } from 'react';
import AttendingListItem from './AttendingListItem';

export default class AttendingList extends Component {
  render() {
    const guests = this.props.people.map(person => {
      return(
        <AttendingListItem 
          name={person} 
          key={Math.random()} 
          removeGuest={this.props.removeGuest}
          />
      )
    });

    return(
      <div className="row attending-list">
        <div className="col s12">
          <h3>Attending: ({this.props.people.length})</h3>
            <ul className="collection">
              {guests}
            </ul>
        </div>
      </div>
    )
  }
}