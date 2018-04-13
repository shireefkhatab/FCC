function pairwise(arr, arg) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i === j) {
        break;
      }
      if (arr[i] + arr[j] === arg) {
        // if( result.includes(i) ){ break; }
        // if( result.includes(j) ){ break; }
        delete arr[i];
        delete arr[j];
        result.push(i);
        result.push(j);
      }
    }
  }
  result = result.reduce((acc, curr) => acc + curr, 0)
  return result;
}

pairwise([1, 4, 2, 3, 0, 5], 7) // should return 11.
pairwise([1, 3, 2, 4], 4) //  should return 1.
pairwise([1, 1, 1], 2) //  should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10.
pairwise([], 100) // should return 0.