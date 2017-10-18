const faker = require('faker');

const shapes = ['monohedron', 'dihedron', 'trihedtron', 'tetrahedron', 'pentahedron', 'hexahedron', 'heptahedron', 'octohedron', 'enneahedron']

const tastes = ['salty', 'spicy', 'eggy', 'sour', 'sweet', 'bitter', 'earthy', 'chicken', 'organic']

function pickRandomItem(array) {
  let pick = Math.floor(Math.random() * (array.length - 1)) + 1
  return array[pick]
}

function makeRock() {
  const rocks =
    { type: "",
      location: [0, 0],
      color: "",
      rockwell: 0,
      structure: "",
      taste: "",
      synthetic: false}

  rocks.type = faker.lorem.word()
  rocks.location = [faker.address.latitude(), faker.address.longitude()]
  rocks.color = faker.commerce.color()
  rocks.rockwell = faker.random.number()
  rocks.structure = pickRandomItem(shapes)
  rocks.taste = pickRandomItem(tastes)
  rocks.synthetic = faker.random.boolean()

  return rocks
}

const moreRocks = function(num) {
  let rockArr = []
  for (var i = 0; i <= num; i++) {
    rockArr.push(makeRock())
  }
  return rockArr
}

module.exports = moreRocks
