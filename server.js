const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const fs = require('fs');


app.listen(process.env.PORT || 8080);

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
app.post('/getshirt', getShirt)


function open(req, res) {
  res.render('index.ejs')
}

// Json wegschrijven, voorbeeld van Menno

function saveShirt(req, res) {
  const {
    maat,
    kleur,
    vorm,
    geslacht,
    shirtTekst
  } = req.body
  const randid = (Math.floor(Math.random() * 100))
  const id = randid.toString();
  const jsonFile = 'data/data.json'
  fs.readFile(jsonFile, (err, content) => {
    if (err) return console.log(err)
    const contentJSON = JSON.parse(content)
    const formData = {
      id,
      maat,
      kleur,
      vorm,
      geslacht,
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
    geslacht: geslacht,
    shirtTekst: shirtTekst
  })
}

function getShirt(req, res) {
  const requestedId = req.body.shirtId
  const jsonFile = 'data/data.json'
  fs.readFile(jsonFile, "utf8", (err, data) => {
    if (err) return console.log(err)
    const shirtData = JSON.parse(data);
    const corrId = shirtData.shirts.filter(function(myShirt) {
      return myShirt.id === `${requestedId}`
    })
    console.log(corrId[0])
    res.render('myshirt.ejs', {
      id: corrId[0].id,
      maat: corrId[0].maat,
      kleur: corrId[0].kleur,
      vorm: corrId[0].vorm,
      geslacht: corrId[0].geslacht,
      shirtTekst: corrId[0].shirtTekst
    })
  })
}