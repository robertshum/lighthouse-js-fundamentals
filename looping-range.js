function range(start, end, step) {
  let arr = [];

  //check for base cases, before proceeding
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  else if (start > end) {
    return [];
  }
  else if (step === 0 || step < 0) {
    return [];
  }

  //do actual work
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(range(10, 30, 5));