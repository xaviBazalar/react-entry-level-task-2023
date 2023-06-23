import React from 'react'

export const Footer = ({totalGames}) => {
    const footerStyle = {
        height: "50px",
        position: (totalGames>16)?"relative":"sticky",
        bottom: "0px",
        display:"flex",
        "justify-content":"center",
        "align-items":"center"
    };


    return (
        <footer style={footerStyle}>&copy;2023 Palms Bet</footer>
    )
}
