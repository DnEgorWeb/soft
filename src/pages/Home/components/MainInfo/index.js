import React from 'react'
import {MainInfo, ListItem} from './styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

const objTexts = {
    "Любые мобильные и WEB-приложения": "images/home/icon_tablet.svg",
    "CRM и программы лояльности": "images/home/icon_lock.svg",
    "Аналитические системы": "images/home/icon_analytics.svg",
    "Банковские системы": "images/home/icon_safe.svg",
    "Социальные сети": "images/home/icon_people.svg",
    "Биллинговые системы": "images/home/icon_roll.svg",
    "Системы документооборота и корпоративные порталы": "images/home/icon_paper.svg",
    "Системы управления предприятием и прочие транзакционные системы": "images/home/icon_puzzle.svg",
    "Игровые сервисы": "images/home/icon_game.svg"
}

export default () => {
    return(
        <MainInfo>
            <Grid>
                <Row>
                    <Col lg={12}><h3>Что мы тестируем</h3></Col>
                    <Row>
                        {Object.keys(objTexts).map((item, key) => (
                            <Col lg={4} md={6} sm={11} index={key} className="listItemWrap col-11">
                                <ListItem imgSrc={objTexts[item]}>
                                    {item}
                                </ListItem>
                            </Col>
                        ))}
                    </Row>
                    <Col lg={12}><h3 className="howWeTestHeader">Как мы тестируем</h3></Col>
                    <Row>
                        <Col lg={12}>
                            <img src="images/home/scheme.svg" alt="scheme"/>
                            <img src="images/home/scheme_reverse.svg" alt="scheme"/>
                        </Col>
                        <Col lg={4} md={4}>
                            <p>
                                Мы разрабатываем собственные решения для ручного и автоматизированного тестирования широкого спектра продуктов
                            </p>
                        </Col>
                        <Col lg={4} md={4}>
                            <p>
                                Индивидуально подходим к решению задач каждого заказчика, разрабатывая уникальные алгоритмы тестирования
                            </p>
                        </Col>
                        <Col lg={4} md={4}>
                            <p>
                                Сопровождаем объекты тестирования до успешной сдачи приемо-сдаточных испытаний
                            </p>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        </MainInfo>
    )
}