import axios from 'axios';
import { NEW_BOOKING } from './types'
import _ from 'lodash'

export const newBooking = (values) => {
  const chart = ({"8:00":800}, {"8:30":830}, {"9:00":900}, {"9:30":930}, {"10:00":1000}, {"10:30":1030}, 
  {"11:00":1100}, {"11:30":1130}, {"12:00":1200}, {"12:30":1230}, {"1:00":1300}, {"1:30":1330},
  {"2:00":1400}, {"2:30":1430}, {"3:00":1500}, {"3:30":1530}, {"4:00":1600}, {"4:30":1630})
  
  // values.bookings.map(booking => {
  //   axios.put('/api/newbooking',{
  //       date: values.date,
  //       booking: [{booked: true}, {booker: values.booker}, {phone:values.phone}]
  //   });
  
  // });
  
  const data = values;
  axios.put('/api/newbooking', data)
  
}