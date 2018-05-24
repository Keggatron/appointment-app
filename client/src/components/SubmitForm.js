import React, { Component } from 'react';
import { newBooking } from '../actions/index';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookerName: '',
      bookerPhone: ''
    };
  }
  
  updateNameValue(evt) {
    this.setState({
      bookerName: evt.target.value
    });
  } 
  
  updatePhoneValue(evt) {
    this.setState({
      bookerPhone: evt.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const {dateNumber, year, monthNumber, bookings } = this.props;
    const { bookerName, bookerPhone } = this.state;
    const combinedDate = year + '' + monthNumber + '' + dateNumber;
    const values = {
      date: combinedDate,
      booker: bookerName,
      phone: bookerPhone,
      bookings: bookings
    };
    newBooking(values);
  }
  
  render() {
    const { month, dateNumber, year } = this.props;
    const writtenDate = month + ' ' + dateNumber + ', ' + year;
    
    
    return (
      <div> 
        <div><span>{writtenDate}</span></div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={this.state.bookerName}
            onChange={evt => this.updateNameValue(evt)}
          />
          <input 
            type="text" 
            name="phone" 
            placeholder="Phone Number" 
            value={this.state.bookerNumber}
            onChange={evt => this.updatePhoneValue(evt)}
          />
          <button>Submit</button>
        </form>  
      </div>  
    );
  }
}


export default SubmitForm;