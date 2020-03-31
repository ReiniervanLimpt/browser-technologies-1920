## Mijn use case

Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.

### Functional:

![functionele laag](https://user-images.githubusercontent.com/36195440/78015210-630fad00-7349-11ea-928a-fe2660d708af.jpg)

- [x] i want to be able to design my own nerdy shirt.
- [x] i want to save my shirt.
- [x] and look it up the next time i open the webpage.
- [ ] i want to be able to print my shirt

Mijn functionele laag heb ik opgebouwd aan de hand van een json bestand waarin de gebruiker zijn waardes uit het formulier opslaat en weer op kan halen aan de hand van een automatisch gegenereerd ID

I build up my functional layer with HTML forms using the correct tags and aria-labels for screenreaders, users design their shirt using the forms input fields and can save the forms parameters in a json file which also gives it a randomly generated ID. Users can then look up their design by looking up their shirts ID.

```javascript
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
```

```javascript
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
```

### Usable:

This is where i styled my page to give the user feedback based on the design choises they made. 

* by using the "checked" values of radio inputs i can style other elements (in this case the shirt) which is an svg so even with images disabled the shirt still shows.

![usable laag](https://user-images.githubusercontent.com/36195440/78015204-61de8000-7349-11ea-81b3-e135556bc398.jpg)
