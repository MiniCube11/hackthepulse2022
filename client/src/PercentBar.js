import React from 'react';
import styled from 'styled-components';

const PercentBar = ({ percent, label }) => {
    return (
        <Container>
            <Bar width={`${percent}%`} color="72D17C"/>
            <Bar width={`${100-percent}%`} color="EC3434"/>
            <Name>{label}</Name>
        </Container>
    )
};

const Container = styled.div`
    margin-top: 50px;
    position: relative;
    background-color: yellow;
    display: flex;
    align-items: center;
`

const Bar = styled.div`
    height: 50px;
    width: ${props => props.width};
    background-color: #${props => props.color};
`

const Name = styled.p`
    position: absolute;
    margin-left: 25px;
`

export default PercentBar;