//How does using % help???  I'm bad at math so I am confused.
function howManyHundreds(num) {
  return (num < 0 ? 0 : Math.floor(num / 100))
}

console.log(howManyHundreds(894));
