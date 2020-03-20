const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const fs = require('fs');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('static'))

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', open)
app.post('/update', saveShirt)


function open(req, res) {
  res.render('index.ejs')
}

// Json wegschrijven, voorbeeld van Menno

function saveShirt(req, res) {
  const {
    maat,
    kleur,
    vorm,
    shirtTekst
  } = req.body
  const id = (Math.floor(Math.random() * 100))
  const jsonFile = 'data/data.json'
  fs.readFile(jsonFile, (err, content) => {
    if (err) return console.log(err)
    const contentJSON = JSON.parse(content)
    const formData = {
      id,
      maat,
      kleur,
      vorm,
      shirtTekst
    }
    contentJSON.shirts.push(formData)
    fs.writeFile(jsonFile, JSON.stringify(contentJSON), err => {
      if (err) console.log(err)
    })
  })
  res.render('myshirt.ejs', {
    id: id,
    maat: maat,
    kleur: kleur,
    vorm: vorm,
    shirtTekst: shirtTekst
  })
}

function getShirt(req, res) {
  fs.readFile(jsonFile, "utf8", (err, data) => {
    if (err) return console.log(err)
    const shirtData = JSON.parse(data);
    console.log(shirtData.shirts)
  })
}