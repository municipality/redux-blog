import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import Headerbar from 'components/Headerbar'
import './Greeting.css'

class Greeting extends Component {
  constructor() {
    super()

    this.state = {
      expanded: true
    }
  }

  expandListener() {
    // Check how far down the window is scrolled
    // Handle state accordingly
    if (window.pageYOffset > 10) {
      this.setState({
        expanded: false
      })
    } else {
      this.setState({
        expanded: true
      })
    }
  }

  componentWillMount() {
    window.addEventListener(
      'scroll',
      _.throttle(this.expandListener, 100).bind(this)
    )
  }

  componentWillUnmount() {}

  render() {
    const { expanded } = this.state
    // Hand;e expanded classes based on state
    const wrapperClasses = classNames('greeting-wrapper', {
      expanded
    })
    const greetingClasses = classNames('greeting', {
      expanded
    })
    const welcomeClasses = classNames('welcome', { expanded })
    const mottoClasses = classNames('motto', { expanded })

    return (
      <div className={wrapperClasses}>
        <div className={greetingClasses}>
          <div className={welcomeClasses}>Welcome to</div>

          <Headerbar />
          <div className={mottoClasses}>
            Feel free to sift around.<br /> Don't mind the smell.
          </div>
        </div>
      </div>
    )
  }
}

export default Greeting
