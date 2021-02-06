import React from "react";

function CarBlock({
  make,
  model,
  year,
  submittedBy,
  imageUrl,
  more,
  rating,
  addRating,
  deleteCar
}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="car-block__image img-thumbnail"
              src={imageUrl}
              alt={make + " " + model + " " + year}
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  className="w-25 img-thumbnail"
                  src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
                  alt="RatignUpButton"
                  onClick={addRating}
                />
              </div>
              <div className="col">
                <p className="car-block__rating font-weight-bold"> {rating}</p>
              </div>
            </div>

            <a href={more}>{model}</a>
            <p>{make + ", " + year}</p>
            <div className="row">
              <p className="col-md2 text-secondary">Submitted by: </p>
              <p className="col-md">{submittedBy}</p>
            </div>
            <button 
            type="button" 
            className="btn btn-danger"
            onClick={deleteCar}>Delete Car</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarBlock;
