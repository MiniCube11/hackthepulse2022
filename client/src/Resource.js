import React from 'react';
import PercentBar from './PercentBar';

const Resource = ({ name, resource }) => {
    const percent = resource.used / resource.total * 100;
    return (
        <PercentBar percent={percent} label={`${name} - ${resource.used} / ${resource.total}`} />
    )
};

export default Resource;