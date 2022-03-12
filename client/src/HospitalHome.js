import React, { useState } from 'react';

import Resource from './Resource';

const HospitalHome = ({ name, resources }) => {
    return (
        <>
            <h2>{name}</h2>
            {Object.keys(resources).map(resource => 
                <Resource key={resource} name={resource} resource={resources[resource]} />
            )}
        </>
    )
};

export default HospitalHome;