import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
    timeElapsedInSeconds: 0,
    timeOff: true,
  }

  componentDidMount() {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    const {timeElapsedInSeconds} = this.state
    if (timeElapsedInSeconds <= 45) {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    } else {
      clearInterval(this.timeInterval)
      this.setState(prevState => ({timeOff: !prevState.timeOff}))
    }
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState(prevState => ({timeOff: !prevState.timeOff}))
  }

  render() {
    const {count, timeElapsedInSeconds, timeOff} = this.state

    return (
      <>
        {timeOff ? (
          <div className="counter-container">
            <h1 className="counter-heading">
              Game Start
              <br /> <span className="counter-value">{count}</span>
            </h1>
            <p className="counter-heading">
              {timeElapsedInSeconds} <span>Sec</span>
            </p>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.onIncrementCount}
              >
                Green
              </button>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="button1"
                onClick={this.onStopTimer}
              >
                Red
              </button>
            </div>
          </div>
        ) : (
          <div className="counter-container">
            <p className="counter-heading">Game Over!</p>
          </div>
        )}
      </>
    )
  }
}
export default ClickCounter
