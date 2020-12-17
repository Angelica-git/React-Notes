import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  tick = () => this.setState({date: new Date()})

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  /*
  Istället för componentDidMount i functioncomponents
  
  useEffect(() => {
    //do something
  }, [someVarible, anotherVarible, prop]) När någon av dessa ändras händer det ovan.
Lämnar man denna [] tom, it will only run on mount
  */

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <h2> Hey, it's {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
