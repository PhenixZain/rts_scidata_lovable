import React from "react";
import "./LogoSVG.scss";


const LogoSVG: React.FC = () => {
    return (
    <div className="logo-container">
        <img
        src="/My_SVG/2Hexagon_01bold.svg"
        alt="Hexagon 1"
        className="logo-svg fade fade-1"
        />
        <img
        src="/My_SVG/2Hexagon_02bold.svg"
        alt="Hexagon 2"
        className="logo-svg fade fade-2"
        />
    </div>
    );
};


export default LogoSVG;