const Appointment = require('../models/Appointments');


module.exports = app => {
  
  app.put('/api/newbooking', (req,res) => {
    const { bookings, date, phone, booker } = req.body
    let data = {
      date: date,
    }
    bookings.forEach(booking => {
      data[booking] = [{booked: true, booker: booker, phone: phone}]
    })
    console.log(data);
    
    Appointment.update({"date": date}, data, {upsert: true})
    
    // Appointment.find({date:date}, (err, appointment) => {
    //   console.log('called')
    //   if(err){
    //     console.log('error')
    //     // Appointment.create({
    //     //   date: date
    //     // }).then
    //     // bookings.map(booking => {
    //     //   Appointment.update({
    //     //     [booking]: [{booked: true, booker: booker, phone:phone}]
    //     //   })
    //     // })
    //   } else {
    //     console.log('else')
    //     // bookings.map(booking => {
    //     //   Appointment.update({
    //     //     [booking]: [{booked: true, booker: booker, phone:phone}]
    //     //   })
    //     // })
    //   }
    // })
    
    
     
   
    Appointment.create(
      
        data
      
    )
  
  })
}