import React from 'react';
import styled from 'styled-components';
import PercentBar from './PercentBar';

const data = {
    stmaryshospital: {name: "Poké Center Hospital", percent: 45},
    grandriverhospital: {name: "Grand River Hospital", percent: 72},
}

const GovernmentHome = ({ hospitals }) => {
    return (
        <div>
            <Name>Hospitals</Name>
            {Object.keys(hospitals).map(hospitalId => 
                    <div key={hospitalId}>
                        <PercentBar label={`${data[hospitalId].name} - ${data[hospitalId].percent}%`} percent={data[hospitalId].percent} />
                    </div>
                )}
        </div>
    )
};

const Name = styled.h2`
    margin-bottom: 60px;
`

export default GovernmentHome;