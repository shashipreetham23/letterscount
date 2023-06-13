// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = letter => {
    this.setState({count: letter.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the letters you Enter</h1>
            <div>
              <label htmlFor="letters">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onChange}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
