import React, { Component } from 'react';
import Header from './components/Header';
import Separator from './components/Separator';
import AddNewGuest from './components/AddNewGuest';
import CheckedInList from './components/CheckedInList';
import AttendingList from './components/AttendingList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIn: [],
      attending: ['Usman Bashir', 'Andrew Yip', 'Zane Holt', 'Ahmad Mushtaq'],
    };
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Separator />

        <AddNewGuest addGuest={this.addGuest.bind(this)} />

        <Separator />

        <AttendingList
          people={this.state.attending}
          removeGuest={this.addGuestToCheckIn.bind(this)}
          />

        <CheckedInList
          people={this.state.checkedIn}
          removeGuest={this.moveGuestToAttending.bind(this)}
          />
      </div>
    );
  }

  addGuest(name) {
    this.setState((prevState, props) => ({
      attending: prevState.attending.concat(name)
    }));
  }

  addGuestToCheckIn(name) {
    this.setState((prevState, props) => ({
      checkedIn: prevState.checkedIn.concat(name),
      attending: prevState.attending.filter(item => item !== name),
    }))
  }

  moveGuestToAttending(name) {
    this.setState((prevState, props) => ({
      attending: prevState.attending.concat(name),
      checkedIn: prevState.checkedIn.filter(item => item !== name)
    }))
  }
}

export default App;
