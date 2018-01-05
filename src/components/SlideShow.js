import React from 'react'
import './SlideShow.css'

const Slide = props =>
  <div className={props.active ? 'slide-active slide' : 'slide'}>
    <div className='image-container'>
      <button className='slide-button previous' onClick={props.handlePrevious}>
        <i className='fas fa-angle-left'></i>
      </button>
      <img src={props.imagePath} alt={props.title} onClick={props.handleNext} />
      <button className='slide-button next' onClick={props.handleNext}>
        <i className='fas fa-angle-right'></i>
      </button>
    </div>
    <p className='slide-description'>{props.title}</p>
  </div>

class SlideShow extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { currentSlide: 0 }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext() {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.props.data.length
    })
  }

  handlePrevious() {
    if (this.state.currentSlide === 0) {
      this.setState({ currentSlide: this.props.data.length - 1 })
    } else {
      this.setState({ currentSlide: this.state.currentSlide - 1 })
    }
  }

  render() {
    return (
      <div className='slide-show'>
        {this.props.data.map((slide, index) =>
          <Slide
            active={this.state.currentSlide === index}
            key={index}
            imagePath={slide.path}
            title={slide.title}
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
          />
        )}
      </div>
    )
  }
}

export default SlideShow
