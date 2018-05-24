import React, { Component } from 'react';
import SubmitForm from './SubmitForm';


class TimeSelect extends Component{
  constructor(props){
    super(props);
    console.log(props)
    
    this.state = {
      bookings: [],
      date: this.props.year + "" + this.props.monthNumber + "" + this.props.date,
      page: 2
    };
    this.bookOpening = this.bookOpening.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  
  bookOpening(opening) {
    const {bookings} = this.state;
    
    if(bookings.includes(opening)){
      const newArr = bookings.filter( el => el !== opening);
      this.setState({
        bookings: newArr
      });
      console.log('bookings',newArr)
    } else {
      const newArr = bookings.concat(opening);
      this.setState({
        bookings: newArr
      });
      console.log('bookings',newArr)
    }  
      
  }
  
  nextPage() {
    console.log(this.state);
    const { page } = this.state;
    
    this.setState({
      page: page + 1
    })
    
  }
  
  render() {
  const monthNumber = ("0" + (this.props.monthNumber+1)).slice(-2)
  const month = this.props.monthName;
  const dateNumber = ("0" + this.props.date).slice(-2);
  const year = this.props.year;
  
  const openings = 
    [
      "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", 
      "11:00", "11:30", "12:00", "12:30", "1:00", "1:30",
      "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"
    ]
  const { page, date, bookings } = this.state;  
    return (
      <div>
        { page === 2 && (
          <div>
            <table>
              <thead>
                <tr>
                  <td>{month} {dateNumber}, {year}</td>
                </tr>
              </thead>
              <tbody>
                {openings.map(opening => (
                  <tr key={opening}>
                    <td
                      onClick={() => {this.bookOpening(opening)}}
                      className={bookings.includes(opening) ? 'time-cells-selected' : 'time-cells'}
                    >
                      {opening}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => {this.nextPage()}}>Next</button>
          </div>
        )}  
        { page === 3 && (
          <SubmitForm 
            previousPage={this.previousPage}
            date={date}
            bookings={bookings}
            month={month}
            dateNumber={dateNumber}
            year={year}
            monthNumber={monthNumber}
          />  
        )}
      </div>  
    )
  }
}

export default TimeSelect;