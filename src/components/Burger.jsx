import * as React from 'react';
import {Motion, presets, spring} from 'react-motion';
import styled from 'styled-components';

const StyledBurger = styled.svg`
    overflow: visible;
    cursor: pointer;
    height: 2rem;
`;

export const Burger = (props) =>
{
    return (<StyledBurger viewBox='0 0 96 96' onClick={() => props.set_open(!props.open)}>
        <Motion
            style={{
                x: spring(props.open ? 1 : 0, presets.wobbly),
                y: spring(props.open ? 0 : 1, presets.wobbly),
            }}
        >
            {({x, y}) =>
                <g
                    id='burger'
                    fill='white'
                    stroke='white'
                    strokeWidth='8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <line
                        transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                        x1='7'
                        y1='26'
                        x2='89'
                        y2='26'
                    />
                    <line
                        transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                        x1='7'
                        y1='70'
                        x2='89'
                        y2='70'
                    />
                    <line
                        transform={`translate(${x * 96})`}
                        opacity={y}
                        x1='7'
                        y1='48'
                        x2='89'
                        y2='48'
                    />
                </g>}
        </Motion>
    </StyledBurger>);
}
