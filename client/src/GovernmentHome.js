import React, { useState } from 'react';

const GovernmentHome = ({ hospitals }) => {
    return (
        <div>
            {Object.keys(hospitals).map(hospitalId => 
                    <div key={hospitalId}>
                        <h2>{hospitals[hospitalId]} - {hospitalId}</h2>
                    </div>
                )}
        </div>
    )
};

export default GovernmentHome;