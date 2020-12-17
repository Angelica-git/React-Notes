import React, {useState, useEffect} from 'react'

export default function Clock() {
  //constructor(props) {
  //super(props)
  //this.state = {date: new Date()}

  const [date, setDate] = useState(new Date())

  //tick = () => this.setState({date: new Date()})

  const tick = () => setDate(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      tick()
    }, 1000)
    return clearInterval(timerID)
  }, [])

  /*
  Istället för componentDidMount i functioncomponents
  
  useEffect(() => {
    //do something
  }, [someVarible, anotherVarible, prop]) När någon av dessa ändras händer det ovan.
Lämnar man denna [] tom, it will only run on mount
  */

  //componentDidMount() {
  // this.timerID = setInterval(() => {
  // this.tick()
  //  }, 1000)
  //}

  //componentWillUnmount() {
  //clearInterval(this.timerID)
  //

  //render() {
  return (
    <div>
      <h2> Hey, it's {date.toLocaleTimeString()}</h2>
    </div>
  )
}
