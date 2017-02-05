var AppointmentForm = React.createClass({
  handleChange(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  },

  setApptTime(e){
    var name = 'appt_time';
    obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj)
    }
  },

  render(){
    var inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="Appointment Title"
                 value={this.props.title}
                 onChange={this.handleChange}/>
          <Datetime input={false}
                    open={true}
                    inputProps={inputProps}
                    value={this.props.appt_time}
                    onChange={this.setApptTime}
          />
          <input type="submit" value="Make appointment"/>
        </form>
      </div>
    )
  }
});
