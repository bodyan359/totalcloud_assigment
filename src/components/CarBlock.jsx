import React from 'react';

function CarBlock({ make, model, year, submittedBy, imageUrl, more, rating }) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="car-block__image img-fluid" src={imageUrl} alt={make + " " + model + " " + year} />
                    </div>
                    <div className="col">
                    <p className="car-block__rating font-weight-bold">{rating}</p>
                        <a href={more}>{model}</a>
                        <p>{make + ", "+year}</p>
                        <p>Submitted by: {submittedBy}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarBlock;