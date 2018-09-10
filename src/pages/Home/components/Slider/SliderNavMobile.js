import React from 'react'
import {ListMobile} from './styled-components'

export default ({currentItem, changeCurrentItem}) => {
    const arr = [0,1,2,3,4]

    return (
        <ListMobile>
            {arr.map((emptyItem, index) => {
                return <li
                    key={index}
                    className={currentItem===index ? "active" : null}
                    onClick={() => changeCurrentItem(index)} />
            })}
        </ListMobile>
    )
}