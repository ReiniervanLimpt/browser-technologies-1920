const femaleShirt = document.getElementById('morphfemale')
const animationToFemale = document.getElementById('to-female')

femaleShirt.addEventListener('click', function() {
  animationToFemale.beginElement();
})

const maleShirt = document.getElementById('morphmale')
const animationToMale = document.getElementById('to-male')

maleShirt.addEventListener('click', function() {
  animationToMale.beginElement();
})