const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema ({
  date: String,
  "8:00": [{booked: Boolean, booker: String, phone: String}],
  "8:30": [{booked: Boolean, booker: String, phone: String}],
  "9:00": [{booked: Boolean, booker: String, phone: String}],
  "9:30": [{booked: Boolean, booker: String, phone: String}],
  "10:00": [{booked: Boolean, booker: String, phone: String}],
  "10:30": [{booked: Boolean, booker: String, phone: String}],
  "11:00": [{booked: Boolean, booker: String, phone: String}],
  "11:30": [{booked: Boolean, booker: String, phone: String}],
  "12:00": [{booked: Boolean, booker: String, phone: String}],
  "12:30": [{booked: Boolean, booker: String, phone: String}],
  "1:00": [{booked: Boolean, booker: String, phone: String}],
  "1:30": [{booked: Boolean, booker: String, phone: String}],
  "2:00": [{booked: Boolean, booker: String, phone: String}],
  "2:30": [{booked: Boolean, booker: String, phone: String}],
  "3:00": [{booked: Boolean, booker: String, phone: String}],
  "3:30": [{booked: Boolean, booker: String, phone: String}],
  "4:00": [{booked: Boolean, booker: String, phone: String}],
  "4:30": [{booked: Boolean, booker: String, phone: String}]
})

module.exports = mongoose.model('appointments', appointmentSchema);