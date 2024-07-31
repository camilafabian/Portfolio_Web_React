import React from 'react';
import './OpinionesCard.css';

function OpinionesCard({ FotoOpi, OpiNombre, OpiProfesion, OpiDescripcion }) {
    return (
        <div className="opinion-card-content">
            <img src={FotoOpi} alt={OpiNombre} />
            <h3>{OpiNombre}</h3>
            <h4>{OpiProfesion}</h4>
            <p>{OpiDescripcion}</p>
        </div>
    );
}

export default OpinionesCard;
