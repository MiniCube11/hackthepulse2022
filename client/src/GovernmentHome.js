import React from 'react';
import styled from 'styled-components';
import PercentBar from './PercentBar';

const data = {
    pokecenterhospital: {name: "Poké Center Hospital", percent: 45},
    grandriverhospital: {name: "Grand River Hospital", percent: 72},
    lunarcrishospital: {name: "Lunar Cris Hospital", percent: 88},
    stmaryshospital: {name: "St. Mary's Hospital", percent: 60},
    heronhospital: {name: "Heron Hospital", percent: 33},
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