const Appointment = ({appointment}) => {
  return (
    <div>
      <h3>{appointment.title}</h3>
      <p>{formatDate(appointment.appt_time)}</p>
    </div>
  )
};