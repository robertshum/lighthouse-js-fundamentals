// function judgeVegetable(vegetables, metric) {

//   let max = 0;
//   let winner = "";

//   for (let entry of vegetables) {
//     if (metric === 'redness') {
//       if (entry.redness > max) {
//         winner = entry.submitter;
//         max = entry.redness;
//       }
//     }
//     else if (metric === 'plumpness') {
//       if (entry.plumpness > max) {
//         winner = entry.submitter;
//         max = entry.plumpness;
//       }
//     }
//   }
//   return winner;
// }

function judgeVegetable(vegetables, metric) {

  let max = 0;
  let winner = "";

  for (let entry of vegetables) {

    if (entry[metric] > max) {
      winner = entry.submitter;
      max = entry[metric];
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const winner = judgeVegetable(vegetables, metric);

console.log(winner);