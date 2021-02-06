import React from 'react';
import CarBlock from './CarBlock';

let dummydb = {
    "cars": [
      {
        "id":1,
        "make": "Mercedes-Benz",
        "model": "W211",
        "year": "2002",
        "submittedBy": "Bogdan",
        "imageUrl": "https://www.auto-data.net/images/f23/Mercedes-Benz-E-class-W211.jpg",
        "more":"https://www.auto-data.net/en/mercedes-benz-e-class-w211-amg-e-55-v8-476hp-automatic-12905",
        "rating": 4
      },      {
        "id":2,
        "make": "BMW",
        "model": "E60",
        "year": "2004",
        "submittedBy": "Romeo",
        "imageUrl": "https://www.auto-data.net/images/f52/BMW-5-Series-E60-Facelift-2007.jpg",
        "more":"https://www.auto-data.net/en/bmw-5-series-e60-facelift-2007-generation-5341",
        "rating": 2
      },      {
        "id":3,
        "make": "BMW",
        "model": "G30",
        "year": "2020",
        "submittedBy": "Ivan",
        "imageUrl": "https://www.auto-data.net/images/f83/BMW-5-Series-Sedan-G30-LCI-facelift-2020_1.jpg",
        "more":"https://www.auto-data.net/en/bmw-5-series-sedan-g30-lci-facelift-2020-generation-7813",
        "rating": 4
      }
    ]
  }

function CarsItem() {
    return (
        <div className="container">
        {dummydb.cars.map((car) => (
          <CarBlock key={car.id} {...car} />
        ))}
        </div>
    )
}

export default CarsItem;
