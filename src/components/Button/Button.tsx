import React from 'react';
import './Button.css';

interface Props {
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
    className: string;
    children: string;
}

const Button: React.FC<Props> = ({onClick, type, className, children}) => {
    return (
        <div className="btn-container">
            <button onClick={onClick} type={type} className={className}>{children}</button>
        </div>
    );
};

export default Button;