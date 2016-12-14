const TimersDashboard = React.createClass({
  render: function() {
    return (
      <div className='ui three colum centered grid'>
        <div className='column'>
          <EditTimerList />
          <ToggleableTimerForm IsOpen={true}/>
        </div>
      </div>
    )
  }
})

const EditableTimerList = React.createClass({
  render: function() {
    return (
      <div id='timers'>
        title='Learn React'
        project='Web Domination'
        elapsed='8986300'
        runningSince={null}
        editFormOpen={false}
        />
      <EditableTimer
        title='Learn extreme ironing'
        project='World Domination'
        elasped='3890985'
        runningSince={null}
        editFormOpen={true}
        />
      </div>
    )
  }
})


const EditableTimer = React.createClass({
  render: function() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
          />
      )
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.runningSince}
          />
      )
    }
  }
})

const TimerForm = React.createClass({
  render: function() {
    const submitText = this.props.title ? 'Update' : 'Create'
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' defaultValue={this.props.project} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'> {submitText}</button>
              <button className='ui basic red button'>  Cancel </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


const ToggleableTimerForm = React.createClass({
  render: function() {
    if ( this.props.isOpen) {
      return (
        <TimerForm />
      )
    }  else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon'></i>
          </button>
        </div>
      )
    }
  }
})

const Timer = React.createClass ({
  render: function() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed)
    return (
      <div className='ui centered card'>
        <div className='content'>  {this.props.title} </div>
        <div className='meta'> {this.props.project}  </div>
        <div className='center aligned description'>
            <h2> {elapsedString} </h2>
        </div>
        <div className='extra content'>
          <span className='right floated edit icon'>
            <i className='edit icon'></i>
          </span>
          <span className='right floated trash icon'>
            <i className='trash icon'></i>
          </span>
        </div>
        <div className='ui bottom attached blue basic button'></div>
      </div>
    )
  }
})
