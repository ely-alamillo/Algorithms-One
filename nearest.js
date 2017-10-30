const distanceCities = require('./distance');

const cities = [
  {name:"Denver", x:500, y:500},
  {name:"Salt Lake City", x:300, y:500},
  {name:"Cheyenne", x:500, y:600},
  {name:"Santa Fe", x:500, y:350}
];

const neighborSearch = (cities, number) => {
  const sites = cities.slice();
  let path = [];
  const pathEnd = sites.length;
  let startValue = number;
  let start = sites.splice(startValue, 1);
  let bestNearest = Number.MAX_VALUE;
  let bestLocation;
  let current = 0;
  let tripLength = 0;
  path.push(start[0]);
  while(path.length < pathEnd) {
    bestNearest = Number.MAX_VALUE;
    for(let i = 0; i < sites.length; i++) {
      current = distanceCities(sites[i], start[0]);
      if(current < bestNearest) {
        bestNearest = current
        bestLocation = i;
      }
    }
    tripLength += distanceCities(start[0], sites[bestLocation])
    start = sites.splice(bestLocation, 1);
    path.push(start[0]);
  }
  return {path, tripLength};
}

const nearestNeighborSearch = (cities) => {
  let random = Math.floor(Math.random()*cities.length);
  let result = neighborSearch(cities, random);
  console.log(result)
  return result;
}

nearestNeighborSearch(cities)
