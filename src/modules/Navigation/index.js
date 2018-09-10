import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {List, Nav, Li, Logo, Buttons, LanguageButton} from './styled-components'
import {BorderLink} from '../Fixtures'
import {Grid, Row, Col} from 'react-bootstrap'
import {PAGES, ENG_PAGES} from '../../constants'
import HamburgerMenu from '../HamburgerMenu'
import ModalForm from '../modalForm';

class Navigation extends Component {
    state = {
        currentPage: "",
	    _: {
        	en: {
        		order: 'to order'
	        },
		    ru: {
			    order: 'заказать'
		    }
	    },
	    username: '',
	    email: '',
	    phone: '',
	    message: ''
    }
    
    componentWillMount() {
        this.setState({
            currentPage: window.location.hash.slice(2)
        })
    }

    componentDidUpdate() {
        this.setHeaderBackground();
    }

    componentDidMount() {
        this.setHeaderBackground();
    }

	/**
     *  заливает фон навигации динамически при скроле страницы.
     *  если это страница 'about', то заливает просто сплошным цветом.
	 */
	setHeaderBackground = () => {
	    const nav     = this.nav;
	    const opacity = this.state.currentPage === 'about' ? 1 : 0;

	    nav.style.background = `rgba(43,44,51, ${opacity})`;

        function fill() {
        	const offset = window.pageYOffset || document.documentElement.scrollTop;
		    const opacity        = offset / 1000;
		    nav.style.background = `rgba(43,44,51,${ opacity > 1 ? 1 : opacity })`;
        }

	    if(this.state.currentPage !== 'about') {
		    fill();
	        window.onscroll = fill
	    } else {
	        window.onscroll = null;
	    }
    }

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

    changePage = (page = '') => {
	    window.pageYOffset = document.documentElement.scrollTop = 0;

	    if(this.props.isModalOpen) {
	    	this.props.modalToggle();
	    }
        this.setState({
            currentPage: page
        })
    }

    render() {
	    const { _ }       = this.state;
	    const { lang, modalToggle, changeLang }    = this.props;
	    const currentList = lang === 'ru' ? PAGES : ENG_PAGES;

        return (
            <Nav innerRef={(nav) => this.nav = nav}>
                <Grid>
                    <Row>
                        <Col md={2} className="col-10">
                            <Link to="/">
                                <Logo onClick={() => this.changePage()}>
                                    <img src="/images/logo.svg" alt="logo"/>
                                </Logo>
                            </Link>
                        </Col>
                        <Col className="d-none d-md-block" md={6} lg={7}>
                            <List>
                                {Object.keys(currentList).map((page, index) => {
                                    if (page === "/") return null
                                    return (<Li key={index}
                                                onClick={() => this.changePage(page)}>
                                        <Link to={`/${page}`} className={page === this.state.currentPage ? "active" : null}>{currentList[page]}</Link>
                                    </Li>)
                                })}
                            </List>
                        </Col>
                        <Col className="d-none d-md-block" md={3} lg={3}>
                            <Buttons>
                                <BorderLink handleClick={modalToggle}>{_[lang].order}</BorderLink>
                                <LanguageButton onClick={changeLang}>{lang === 'ru' ? 'Eng' : 'Rus'}</LanguageButton>
                            </Buttons>
                        </Col>
                        <Col className="d-inline-block d-md-none">
                            <HamburgerMenu currentPage={this.state.currentPage} 
                                           changePage={this.changePage}/>
                        </Col>
                    </Row>
                </Grid>
	            <ModalForm
		            lang={lang}
		            isModalOpen={this.props.isModalOpen}
					username={this.state.username}
					email={this.state.email}
					phone={this.state.phone}
					message={this.state.message}
		            handleInput={this.handleInput}
	            />
            </Nav>
        )
    }
}

export default Navigation
