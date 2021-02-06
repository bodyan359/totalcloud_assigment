import React from "react";
import CarBlock from "./CarBlock";

let dummydb = {
  cars: [
    {
      id: 1,
      make: "Mercedes-Benz",
      model: "W211",
      year: "2002",
      submittedBy: "Bogdan",
      imageUrl:
        "https://www.auto-data.net/images/f23/Mercedes-Benz-E-class-W211.jpg",
      more:
        "https://www.auto-data.net/en/mercedes-benz-e-class-w211-amg-e-55-v8-476hp-automatic-12905",
      rating: 17
    },
    {
      id: 2,
      make: "BMW",
      model: "E60",
      year: "2004",
      submittedBy: "Romeo",
      imageUrl:
        "https://www.auto-data.net/images/f52/BMW-5-Series-E60-Facelift-2007.jpg",
      more:
        "https://www.auto-data.net/en/bmw-5-series-e60-facelift-2007-generation-5341",
      rating: 7
    },
    {
      id: 3,
      make: "BMW",
      model: "G30",
      year: "2020",
      submittedBy: "Ivan",
      imageUrl:
        "https://www.auto-data.net/images/f83/BMW-5-Series-Sedan-G30-LCI-facelift-2020_1.jpg",
      more:
        "https://www.auto-data.net/en/bmw-5-series-sedan-g30-lci-facelift-2020-generation-7813",
      rating: 14
    }
  ]
};

function CarsItem() {
  const [data, setData] = React.useState(dummydb.cars);
  const increaseRating = (id) =>
    setData((oldData) =>
      oldData.map((car) =>
        car.id === id ? { ...car, rating: car.rating + 1 } : car
      )
    );

  const deleteCar = (id) =>
    setData((oldData) =>
      oldData.filter((car) =>
      car.id === id ? '' : car
      )
    );
    console.log(dummydb.cars);

  return (
    <div className="container">
      {[...data]
        .sort((a, b) => b.rating - a.rating)
        .map((car) => (
          <CarBlock
            key={car.id}
            {...car}
            addRating={() => increaseRating(car.id)}
            deleteCar={() => deleteCar(car.id)}
          />
        ))}
    </div>
  );
}

export default CarsItem;
