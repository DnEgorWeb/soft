import React from 'react';

import {
    Button,
    Box,
    BLink,
    StyledLink,
    ShBox
} from './styled-components';

export const RedButton = ({ children }) => (
    <Button>{children}</Button>
);

export const ColorBox = ({children, grey, purple}) => (
    <Box grey={grey} purple={purple}>{children}</Box>
);

export const BorderLink = ({ children, handleClick }) => (
    <BLink onClick={handleClick}>{children}</BLink>
);

export const SLink = ({ children }) => (
    <StyledLink>{children}</StyledLink>
);

export const ShadowCard = ({ children, className, hoverOn, hoverOf, big }) => (
	<ShBox
        className={ className }
        onMouseOver={ hoverOn }
        onMouseOut={ hoverOf }
        big={big}
    >{ children }</ShBox>
);