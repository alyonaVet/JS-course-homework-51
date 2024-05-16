import React from 'react';
import './Ball.css';

interface Props {
    value: number;
}
const Ball: React.FC<Props> = ({ value }) => {
    return (
        <div className="ball">{value}</div>
    );
};

export default Ball;