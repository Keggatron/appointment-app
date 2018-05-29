const Appointment = require('../models/Appointments');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appointment');
const conn = mongoose.connection;

module.exports = app => {
  
  app.put('/api/newbooking', (req,res) => {
    const { bookings, date, phone, booker } = req.body
    console.log(bookings)
        let data = {}
        bookings.forEach(booking => {
          data[booking] = [{booked: true, booker: booker, phone: phone}]
        })
    
    console.log(data)
    
    
    async function run() {
      await Appointment.update({ date: date }, data, { upsert: true });
      let found = await Appointment.findOne();
      console.log(found);
      return conn.close();
    }

    run();

    
    
    // const { bookings, date, phone, booker } = req.body
    // let data = {}
    // bookings.forEach(booking => {
    //   data[booking] = [{booked: true, booker: booker, phone: phone}]
    // })
    // console.log(data);
    
    // Appointment.update({date: date}, data, {upsert: true})
    // Appointment.create({date: date})
    // Appointment.create({date:date}, data);
    
    // const data = { booked: true, booker: 'bill', phone: '000-000-0000' };
    // async function run() {
    //   await mongoose.dropDatabase();
    //   await Appointment.update({ date: '20180525' }, { '8:00': [data] }, { upsert: true });
    //   let found = await Appointment.findOne();
    //   console.log(found);
    // }
  })
}

