const chooseStations = function (stations) {
  // Your code in here ...
  let goodStations = [];
  for (let station of stations) {
    let type = station[2];
    let size = station[1];
    if ((type === "school" || type === "community centre") && size >= 20) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));