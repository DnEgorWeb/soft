import React, {Component} from 'react'
import {Wrapper, FirstCard, Card} from './styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

class Cards extends Component {
    render() {
        return (
            <Wrapper>
            <Grid>
                <Row>
                    <Col lg={4} md={12} sm={12} className="d-flex justify-content-center">
                        <FirstCard>
                            <img src="images/home/2.svg" alt="services amount" className="firstCardImage"/>
                            <h3>Типовые услуги</h3>
                        </FirstCard>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                        <Card className="secondCard">
                            <img src="images/home/scheme audit.svg" alt="audit scheme" className="card"/>
                            <h4>Аудит</h4>
                            <p>Всесторонний анализ эффективности процессов, действующих в Вашей компании</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 84">
                                <path id="_1" d="M-10.2-84v82.056a2.042 2.042 0 0 1-2.026 1.937c-1.63.015-17.285 0-17.285 0V-68.4H-46.2V-84z" class="card-1" data-name="1" transform="translate(46.2 84)"/>
                            </svg>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                        <Card className="thirdCard">
                            <img src="images/home/scheme_test.svg" alt="test scheme" className="card"/>
                            <h4>Тестирование</h4>
                            <p>Комплексный сервис мониторинга, соответствующий потребностям Вашей компании</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 85">
                                <path id="_2" d="M-3.68-16.2v13.7A1.969 1.969 0 0 1-5.7-.456l-61.158.016v-12.535l32.246-30.442q5.135-4.895 6.927-8.416a15.3 15.3 0 0 0 1.791-6.984 9.232 9.232 0 0 0-3.4-7.7Q-32.7-69.2-39.27-69.2a22.908 22.908 0 0 0-9.913 2.089 18.981 18.981 0 0 0-7.4 6.268L-70.68-69.92a33.057 33.057 0 0 1 13.5-11.4 45.087 45.087 0 0 1 19.701-4.12 40.529 40.529 0 0 1 16.3 3.044 25.125 25.125 0 0 1 10.868 8.6 22.233 22.233 0 0 1 3.884 13.068 29.13 29.13 0 0 1-2.866 12.774q-2.866 5.969-11.107 13.61L-39.628-16.2z" class="card-2" data-name="2" transform="translate(70.68 85.44)"/>
                            </svg>
                        </Card>
                    </Col>
                </Row>
            </Grid>
            </Wrapper>
        )
    }
}

export default Cards