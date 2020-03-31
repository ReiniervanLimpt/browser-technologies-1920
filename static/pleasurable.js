const colorBlind = document.querySelector('button')
const labels = document.querySelectorAll('label')

colorBlind.addEventListener('click', function() {
  if (labels[0].classList.contains("colorblind")) {
    for (i = 0; i < 12; i++) {
      labels[i].classList.remove("colorblind")
      colorBlind.textContent = "KLEURENBLIND MODUS: UIT";
    }
    labels[1].textContent = "PERLTWINKLE";
    labels[2].textContent = "NERD GREEN";
    labels[5].textContent = "CINNAMON";
    labels[6].textContent = "BLUEVIOLET";
    labels[7].textContent = "SAND";
    labels[8].textContent = "SALMON";
  } else {
    for (i = 0; i < 12; i++) {
      labels[i].classList.add("colorblind")
      colorBlind.textContent = "KLEURENBLIND MODUS: AAN";
    }
    labels[1].textContent = "BRIGHT PURPLE";
    labels[2].textContent = "BRIGHT GREEN";
    labels[5].textContent = "DARK RED";
    labels[6].textContent = "DARK PURPLE";
    labels[7].textContent = "LIGHT BROWN";
    labels[8].textContent = "ROZE";
  }
})

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

const heartShape = document.getElementById('morphheart')
const animationToHeart = document.getElementById('to-heart')

heartShape.addEventListener('click', function() {
  animationToHeart.beginElement();
})

const bracketShape = document.getElementById('morphbracket')
const animationToBracket = document.getElementById('to-bracket')

bracketShape.addEventListener('click', function() {
  animationToBracket.beginElement();
})

const swordShape = document.getElementById('morphsword')
const animationToSword = document.getElementById('to-sword')

swordShape.addEventListener('click', function() {
  animationToSword.beginElement();
})

const textInput = document.getElementById('shirtText')
textInput.addEventListener("input", function() {
  document.querySelector('.text').textContent = textInput.value;
})