import React, {Component, Fragment} from 'react';
import Slider                       from './components/Slider'
import Cards                        from './components/Cards'
import MainInfo                     from './components/MainInfo'
import Form                         from '../../modules/Form/index'
import {FormBlock}                  from '../../modules/Form/styled-components'
import { Grid }                     from 'react-bootstrap';

const text = {
    ru: "Сообщите какое тестирование Вам необходимо и мы предоставим Вам всю необходимую информацию о технологиях и стоимости тестирования.",
    en: "Tell us what type of testing you need and we`ll provide you all necessary information about technologies and testing value."
}

class Home extends Component {
    state = {
        username: '',
        email: '',
        phone: '',
        message: ''
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <Slider/>
                <Cards/>
                <MainInfo/>
                <FormBlock>
                    <Grid>
                        <Form username={this.state.username}
                              email={this.state.email}
                              phone={this.state.phone}
                              message={this.state.message}
                              handleInput={this.handleInput}
                              text={text}
                              lang={this.props.lang}
                        />
                    </Grid>
                </FormBlock>
            </Fragment>
        )
    }
}

export default Home