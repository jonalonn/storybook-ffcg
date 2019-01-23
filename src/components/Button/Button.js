import React from "react";

const Button = ({ onClick, btnText = "Default text" }) => <button onClick={onClick}>{btnText}</button>;

export default Button;