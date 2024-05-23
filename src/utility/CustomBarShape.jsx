import React from 'react';

const CustomBarShape = (props) => {
    const { x, y, width, height, fill, value } = props;
    const path = `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;
    return (
        <g>
            <path d={path} fill={fill} />
            <text x={x + width / 2} y={y - 5} textAnchor="middle" fill={fill} fontSize="14px">{value}</text>
        </g>
    );
};

export default CustomBarShape;
