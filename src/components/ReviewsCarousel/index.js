// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  forward = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length - 1) {
      this.setState({index: index + 1})
    }
  }

  backward = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState({index: index - 1})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>

        <div className="card">
          <button
            className="arrow-btn"
            onClick={this.backward}
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="details">
            <img src={imgUrl} className="img" alt={username} />
            <p className="username">{username}</p>
            <p className="c-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            className="arrow-btn"
            onClick={this.forward}
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
