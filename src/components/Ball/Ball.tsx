import React from 'react';
import './Ball.css';
const Ball: React.FC<IBall> = ({ value }) => {
    return (
        <div className="ball">{value}</div>
    );
};

export default Ball;