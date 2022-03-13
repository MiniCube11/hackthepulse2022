import React, { useState } from 'react';
import styled from 'styled-components';

import Resource from './Resource';

const HospitalHome = ({ name, resources }) => {
    return (
        <>
            <Name>{name}</Name>
            {Object.keys(resources).map(resource => 
                <Resource key={resource} name={resource} resource={resources[resource]} />
            )}
        </>
    )
};

const Name = styled.h2`
    margin-bottom: 60px;
`

export default HospitalHome;