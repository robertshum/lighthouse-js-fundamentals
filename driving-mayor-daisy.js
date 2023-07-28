function carPassing(cars, speed) {
  let car = {
    speed: speed,
    time: Date.now()
  };

  cars.push(car);
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

let arrayOfCars = carPassing(cars, speed);
console.log(arrayOfCars[arrayOfCars.length-1]);