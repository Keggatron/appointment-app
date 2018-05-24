import React, { Component } from 'react';
import _ from 'lodash';
import TimeSelect from './TimeSelect';

const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



class Calendar extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      month: monthLabels[new Date().getMonth()],
      monthNumber: new Date().getMonth(),
      year: new Date().getFullYear(),
      displayedMonthDays: daysInMonths[new Date().getMonth()],
      page: 1,
      selectedDate: 0
    };
    this.nextPage = this.nextPage.bind(this);
  }
  
  renderWeekDays() {
    return _.map(dayLabels, day =>{
      return (
        <td key={day}> {day} </td>
      );
    });
  }
  
  nextPage(date) {
    const {page} = this.state;
      
    this.setState({ 
      page: page + 1,
      selectedDate: date
    });
  }
  
  previousPage() {
    const { page } = this.state;
    
    this.setState({ page: page -1 })
  }
  
  
  renderDaysInWeek(day, i) {
    const firstOfMonth = new Date(this.state.year, monthLabels.indexOf(this.state.month), 1).getDay();
    const days = [];
    // days in week
      for(var j = 0; j <= 6; j++) {
        if(day <= this.state.displayedMonthDays && ( i > 0 || j >= firstOfMonth)){
          const date = day
          days.push(
            <td
              className="day-cells"
              onClick={() => {this.nextPage(date)}}
            > 
              {day} 
            </td>
          );
          day++;
        } else if (day > this.state.displayedMonthDays){
          break;
        } else {
          days.push(<td> </td>);
          
        }
      }
    return days;
  }
  
  renderDaysInMonth() {
    var firstOfMonth = new Date(this.state.year, monthLabels.indexOf(this.state.month), 1).getDay();
    var day = 1; 
    const weeks = [];
    // weeks in month
    for(var i = 0; i < 6; i++ ){
      if (day <= this.state.displayedMonthDays + 1){
        weeks.push(<tr>{this.renderDaysInWeek(day, i)}</tr>)
        day = day + 7 - firstOfMonth
        firstOfMonth = 0
      }
    }
    return weeks
  }
  
  nextMonth() {
    if(this.state.monthNumber < 11){
      return this.setState ({
        month: monthLabels[this.state.monthNumber +1],
        monthNumber: this.state.monthNumber + 1,
        displayedMonthDays: daysInMonths[this.state.monthNumber +1]
      })
    } else {
      return this.setState ({
        month: monthLabels[0],
        monthNumber: 0,
        displayedMonthDays: daysInMonths[0],
        year: this.state.year + 1
      })
    }
  }
  
  render() {
    const { page } = this.state
    
    
    
    return (
      <div>
        {page === 1 && (
        <table>
          <tbody>
            <tr>
              <td colSpan="7">{this.state.year}</td>
            </tr> 
            <tr>
              <td colSpan="2"></td>
              <td colSpan="3">{this.state.month}</td>
              <td colSpan="2"> 
                <button onClick={this.nextMonth.bind(this)}> >> </button> 
              </td>
            </tr> 
            <tr>
              {this.renderWeekDays()}
            </tr>
            
              {this.renderDaysInMonth()}
            
          </tbody>
        </table>
        )}
        { page === 2 && (
          <TimeSelect 
            previousPage = {this.previousPage} 
            date={this.state.selectedDate}
            monthNumber={this.state.monthNumber}
            year={this.state.year}
            monthName={this.state.month}
          />
        )}
        
      </div>
    )
  }
}

export default Calendar;