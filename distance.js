const distance = (cityOne, cityTwo) => {
  const xDiff = Math.pow(cityOne.x - cityTwo.x, 2);
  const yDiff = Math.pow(cityOne.y - cityTwo.y, 2);
  return Math.sqrt(xDiff + yDiff);
};

module.exports = distance;
