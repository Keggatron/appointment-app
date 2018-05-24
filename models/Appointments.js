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
  "13:00": [{booked: Boolean, booker: String, phone: String}],
  "13:30": [{booked: Boolean, booker: String, phone: String}],
  "14:00": [{booked: Boolean, booker: String, phone: String}],
  "14:30": [{booked: Boolean, booker: String, phone: String}],
  "15:00": [{booked: Boolean, booker: String, phone: String}],
  "15:30": [{booked: Boolean, booker: String, phone: String}],
  "16:00": [{booked: Boolean, booker: String, phone: String}],
  "16:30": [{booked: Boolean, booker: String, phone: String}]
})

module.exports = mongoose.model('appointments', appointmentSchema);