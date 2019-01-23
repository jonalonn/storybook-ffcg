import React from "react";
import PropTypes from 'prop-types';
import s from './Button.css';


const Button = ({ 
    onClick, 
    btnText = "Default text", 
    disabled = false
}) => 
    <button   
        className={"Button"}
        onClick={onClick}
        disabled={disabled}
    >
        {btnText}
    </button>;

Button.propTypes = {
    onClick: PropTypes.function,
    btnText: PropTypes.string,
    disabled: PropTypes.boolean
};

export default Button;

