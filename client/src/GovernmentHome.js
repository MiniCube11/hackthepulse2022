import React from 'react';
import PercentBar from './PercentBar';

const GovernmentHome = ({ hospitals }) => {
    return (
        <div>
            <h2>Hospitals</h2>
            {Object.keys(hospitals).map(hospitalId => 
                    <div key={hospitalId}>
                    <PercentBar label={`${hospitalId} - 40%`} percent={40} />
                    </div>
                )}
        </div>
    )
};

export default GovernmentHome;