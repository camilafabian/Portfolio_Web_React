import React from 'react';
import './PortfolioCard.css';

function PortfolioCard({ img, titulo, categoria }) {
    return (
        <div className="marcogaleria">
            <img src={img} alt={titulo} />
            <div className="overlay">
                <div className="titulosproyecto">
                    <p>{titulo}</p>
                    <p>{categoria}</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;
