import React from 'react'
import {ListDesktop, Wrapper} from './styled-components'
import {Grid, Row} from 'react-bootstrap';
import SettingsIcon from './icons/icon_settings'
import SpeedIcon from './icons/speed_icon'
import GreedIcon from './icons/icon_grid'
import BugIcon from './icons/icon_code_bug'
import GearIcon from './icons/icon_gear'

const itemsMap = {
    "Оптимизация архитектуры": <SettingsIcon/>,
    "Увеличение производительности": <SpeedIcon/>,
    "Повышение эргономичности": <GreedIcon/>,
    "Устранение уязвимостей": <BugIcon/>,
    "Обеспечение интеграции": <GearIcon/>
}

const SliderNav = ({currentItem, changeCurrentItem}) => {
    return (
        <Wrapper className="desktopSlider">
            <Grid>
                <Row>
                    <ListDesktop>
                        {Object.keys(itemsMap).map((item, index) => {
                            return <li key={index}
                                       className={currentItem===index ? "active_slider_item" : null}
                                       onClick={() => changeCurrentItem(index)}>
                                {itemsMap[item]}
                                <div>
                                    {item.split(" ")[0]}
                                    <br/>
                                    {item.split(" ")[1]}
                                </div>
                            </li>
                        })}
                    </ListDesktop>
                </Row>
            </Grid>
        </Wrapper>
    )
}

export default SliderNav