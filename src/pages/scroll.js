import React, { Component } from 'react'
import '../layout/style.scss'

class Scroller extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    watchCurrentPosition() {
        console.log("this.scrollTop", this.scrollTop());
        // this.state.currentPosition = this.scrollTop();
        this.setState({currentPosition: this.scrollTop()});
        console.log(this.state.currentPosition);
    }

    // displaywatchCurrentPosition() {
    //   this.setState({count: this.state.currentPosition});
    // }

    scrollTop() {
        return Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop);
    }

    render() {
        return (
          <div>
            { this.state.currentPosition > 150 ? ( <p className="Scroll__box__text">Scroll Top: {this.state.currentPosition}</p> 
            ): (
              <p className="Scroll__box__text">Scroll: {this.state.currentPosition}</p>
            )}
            <div className="Scroll__box"></div>
          </div>
        )
    }
}

export default Scroller