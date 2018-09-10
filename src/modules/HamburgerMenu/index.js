import React, {Component} from 'react'
import {MenuToggle, List, Burger, Contacts, ContactUs} from './styled-components'
import {LanguageButton} from '../Navigation/styled-components'
import {Link} from 'react-router-dom'
import {PAGES} from '../../constants'

class HamburgerMenu extends Component {
    state = {
        checked: false
    }

    linkClick = (page) => {
        this.setState({checked: false})
        this.props.changePage(page)
    }
    
    render() {
        return (
            <div>
                <MenuToggle>
                    <span className={this.state.checked ? 'open':null}/>
                    <Burger className={this.state.checked ? 'open':null} onClick={() => this.setState({checked: !this.state.checked})}/>
                </MenuToggle>
                <List className={this.state.checked ? 'open':null}>
                    {Object.keys(PAGES).map((page, index) => {
                        return (<Link key={index}
                                      to={`/${page}`}
                                      onClick={() => this.linkClick(page)}>
                            <li className={page === this.props.currentPage ? "active" : null}>{PAGES[page]}</li>
                        </Link>)
                    })}
                    <li style={{display:'block'}}>
                        <LanguageButton className="languageButton">Eng</LanguageButton>
                    </li>
                    <li>
                        <Contacts>
                            <ContactUs>Свяжитесь с нами</ContactUs>
                            <div>г. Москва, ул. Беговая, д. 3, стр. 1</div>
                            <div>+7(495)737-06-79</div>
                            <div>test@rusoft-company.ru</div>
                            {/* <SocialLinks>
                                <a href="#">
                                    <img src="/images/icon_vk.svg" alt="vk_link"/>
                                </a>
                                <a href="#">
                                    <img src="/images/icon_tw.svg" alt="twitter_link"/>
                                </a>
                                <a href="#">
                                    <img src="/images/icon_fb.svg" alt="facebook_link"/>
                                </a>
                            </SocialLinks> */}
                        </Contacts>
                    </li>
                </List>
            </div>
        )
    }
}

export default HamburgerMenu