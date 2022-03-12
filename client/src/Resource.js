import React, { useEffect, useState } from 'react';

const Resource = ({ name, resource }) => {
    return (
        <div>
            {name}
            <p>{resource.used} / {resource.total}</p>
            <p>Demand: {resource.demand}</p>
        </div>
    )
};

export default Resource;