var Appointments = React.createClass({
  getInitialState(){
    return {
      appointments: this.props.appointments,
      title: 'Team Stand up ',
      appt_time: 'Tomorrow at 9pm'
    }
  },

  handleUserInput(obj){
    this.setState(obj);
  },

  handleFormSubmit(){
    var appointment = {title: this.state.title,
      appt_time: this.state.appt_time};
    $.post('/appointments',
      {appointment: appointment}
    ).done(function(data){
      this.addNewAppointment(data)
    }.bind(this));
  },

  addNewAppointment(appointment){
    var appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
    this.setState({appointments: appointments.sort(function (a,b) {
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  },

  render(){
    return (
      <div>
        <AppointmentForm title={this.state.title}
                         appt_time={this.state.appt_time}
                         onUserInput={this.handleUserInput}
                         onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={this.state.appointments}/>
      </div>
    )
  }
});