import React, {Fragment} from 'react'
import {Section, Header} from '../../styled-components'
import {RedButton} from '../../../../modules/Fixtures/index'
import {Grid, Row, Col} from 'react-bootstrap'

const sliderTexts = [
    {
        h1: "Различные виды тестирования",
        h3: "Аудит и контроль качества бизнес процессов",
        RedButton: "Оставить заявку"
    },
    {
        h1: "Random text 111111111111",
        h3: "Random text 1111111",
        RedButton: "Оставить заявку"
    },
    {
        h1: "Random text 222222222222",
        h3: "Random text 222222222222",
        RedButton: "Оставить заявку"
    },
    {
        h1: "Random text 3333333333333",
        h3: "Random text 3333333333333",
        RedButton: "Оставить заявку"
    },
    {
        h1: "Random text 4444444444444",
        h3: "Random text 4444444444444",
        RedButton: "Оставить заявку"
    },
]

export default ({currentItem}) => {
    return (
        <Fragment>
            <Section>
                <Grid>
                    <Row>
                        <Col lg={6} md={12}>
                            <Header>
                                <h1>{sliderTexts[currentItem].h1}</h1>
                                <h3>{sliderTexts[currentItem].h3}</h3>
                                <RedButton>{sliderTexts[currentItem].RedButton}</RedButton>
                            </Header>
                        </Col>
                    </Row>
                </Grid>
            </Section>
        </Fragment>
    )
}