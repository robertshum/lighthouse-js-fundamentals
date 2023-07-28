const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === 'north') {
      y++;
    }
    else if (move === 'south') {
      y--;
    }
    else if (move === 'east') {
      x++;
    }
    else if (move === 'west') {
      x--;
    }
  }

  //push x and y into an array and then return
  return [x, y];
}

console.log(finalPosition(['north', 'north']));