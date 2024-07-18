import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {setitem: 'Subscribe'}

  changeSubscribe = () => {
    this.setState(prevstate => {
      let b
      if (prevstate.setitem === 'Subscribe') {
        b = 'Subscribed'
      } else {
        b = 'Subscribe'
      }
      return {setitem: b}
    })
  }

  render() {
    const {setitem} = this.state
    return (
      <div className="background-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" onClick={this.changeSubscribe}>
          {setitem}
        </button>
      </div>
    )
  }
}
export default Welcome
