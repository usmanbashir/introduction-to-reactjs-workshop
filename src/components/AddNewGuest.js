import React, { Component } from 'react';

export default class AddNewGuest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <form className="add-new-guest" onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col s5 push-s3">
            <div className="input-field">
              <i className="material-icons prefix">person</i>

              <input id="full-name" 
                     name="full-name"
                     type="text"
                     value={this.state.value}
                     onChange={this.handleChange.bind(this)} />

              <label htmlFor="full-name">Guest Name</label>
            </div>
          </div>
          <div className="col s1 push-s3">
            <button type="submit" className="btn-floating btn-large waves-effect waves-light green">
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>
      </form>
    )
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.value);
    this.setState({ value: '' });
  }
}