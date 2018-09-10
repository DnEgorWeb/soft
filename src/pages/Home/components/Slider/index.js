import React, {Component} from 'react';
import SliderHeader from './SliderHeader'
import SliderNavDesktop from './SliderNavDesktop'
import SliderNavMobile from './SliderNavMobile'
import {Wrapper} from './styled-components'
import Hammer from "hammerjs";

class Slider extends Component {
    state = {
        currentItem: null
    }

    componentWillMount() {
        this.setState({
            currentItem: 0
        })
    }

    componentDidMount() {
        const wrapper = document.querySelector('.wrapper')
        const mc = new Hammer(wrapper)
        mc.on('swipeleft', () => {
            const {currentItem} = this.state
            const newItem = currentItem === 4 ? 0 : currentItem+1
            this.changeCurrentItem(newItem)
        })
        mc.on('swiperight', () => {
            const {currentItem} = this.state
            const newItem = currentItem === 0 ? 4 : currentItem-1
            this.changeCurrentItem(newItem)
        })
    }

    changeCurrentItem = (itemNumber) => {
        this.setState({
            currentItem: itemNumber
        })
    }

    render() {
        return (
            <Wrapper className="wrapper">
                <SliderHeader currentItem={this.state.currentItem} />
                <SliderNavDesktop currentItem={this.state.currentItem}
                                  changeCurrentItem={this.changeCurrentItem} />
                <SliderNavMobile currentItem={this.state.currentItem}
                                 changeCurrentItem={this.changeCurrentItem} />
            </Wrapper>
        )
    }
}

export default Slider