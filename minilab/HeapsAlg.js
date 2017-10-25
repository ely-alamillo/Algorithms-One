const distanceCities = require('../distance');

let max;
let flag = true;
const bestRoutes = [];
const nextElement = (n, set) => {
  if(n === 1) {
    console.log(set);
    let distance = 0;
    for (let i = 0; i < set.length; i++) {
      if ( i === set.length - 1) {
        distance += distanceCities(set[i], set[0])
      } else {
        distance += distanceCities(set[i], set[i + 1]);
      };
    };
    if (flag) {
      max = distance;
      flag = false;
    }
    if (distance <= max) {
      set.distance = distance;
      bestRoutes.push(set)
      max = distance;
      // console.log('the max is:', max);
    }
  }
  else {
    for(let i = 0; i < n-1 ; i++) {
      nextElement(n - 1, set);
      if(n%2===0) {
        let x = set[i];
        set[i] = set[n-1];
        set[n-1] = x;
      }
      else {
        let x = set[0];
        set[0] = set[n-1];
        set[n-1] = x;
      }
    }
    nextElement(n - 1, set);
  }
}

const countSet = (set) => {
  console.log(set);
  let n = set.length;

  let array = [];
  set.forEach((each) => {
    array.push(each);
  });
  nextElement(array.length, array);
  return bestRoutes;
}

module.exports = countSet;
