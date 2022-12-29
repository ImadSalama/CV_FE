import React from 'react';


const GlowButton = ({ name = "button" }) => {
    return (<button style={{
        fontSize: "12px",
        padding: "2% 6%",
        borderRadius: "5px",
        color: "#0a2c66",
        fontStyle: "AvenirText",

        boxShadow: "0 5px 15px rgba(255, 255, 255, .4)"
    }}>
        { name}
    </button >);
}

export default GlowButton;