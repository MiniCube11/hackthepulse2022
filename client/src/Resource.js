import React from 'react';
import styled from 'styled-components';

const Resource = ({ name, resource }) => {
    const percent = resource.used / resource.total * 100;
    return (
        <Container>
            <Bar width={`${percent}%`} color="EC3434"/>
            <Bar width={`${100-percent}%`} color="72D17C"/>
            <Name>{name} - {resource.used} / {resource.total}</Name>
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

export default Resource;