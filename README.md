## Mijn use case

Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.

### Functional:

![functionele laag](https://user-images.githubusercontent.com/36195440/78015210-630fad00-7349-11ea-928a-fe2660d708af.jpg)

- [x] i want to be able to design my own nerdy shirt.
- [x] i want to save my shirt.
- [x] and look it up the next time i open the webpage.
- [ ] i want to be able to print my shirt

I built up my functional layer with HTML forms using the correct tags and aria-labels for screenreaders, users design their shirt using the forms input fields and can save the forms parameters in a json file which also gives it a randomly generated ID. Users can then look up their design by looking up their shirts ID. This is also a workaround for localstorage which otherwise would require feature detection which checks if the window has local storage.

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


## issues with other browsers

- [x] Only chromium browsers support shape morphing through svgs, so for other browsers i need to make the changes visible without animations...

## tackling the SVG issue :star:

i stumbled upon [this article](http://blog.greggant.com/posts/2018/10/10/svg-path-d-animation-in-2018.html) explaining only chromium browsers can animate the "d" path of an SVG with CSS, i now added SMIL ( Synchronized Multimedia Integration Language) a built in animation specification within the SVG to trigger animations with javascript...

*i decided to keep in the css d path animation so the shirt still animates in chromium browsers without javascript enabled*

## hold up, thats not working yet :cold_sweat:

The page where the user requests his previous design doesnt work in firefox! the shirt does not display with the right model or shape on the front... this is because the "chromium way" of morphing my SVG graphic worked with:
`input[id=vrouw]:checked ~ svg path#shirt{
  d: path(*shape_path*);
}`

in firefox this would not work, my solution? check which shape and shirt type are requested and make a javascript if statement with templating to only only display the animation specification corresponding to the one in the database.

`<% if (vorm=="heart" ) { %>
    <animate id="to-heart" href="#vorm" end-value-list
    attributeName="d"
    to=*shape_path*
    dur="0.5s"
    fill="freeze" />
 <% } %>`

### this issue was very challenging and took me a lot of time and hacking to work around... i am proud of the result.

## issues with features

1 :white_check_mark: disabling images: there are currently no images in my application, only SVG's.

2 :white_check_mark: disabling custom fonts: i wrote a simple font-stack which looks for other declared fonts and finally any sans-serif font supported by the browser. `font-family: 'Roboto Mono', monospace, Arial, Helvetica, sans-serif;`

3 :exclamation: disabling color / adding colorblindness: this is a big problem in my application, at this stage the user only gets te read the name of the color when its selected, and some of the names are cryptic like: "perltwinkle" or "cinnamon".

4 :exclamation: mouse / trackpad not working: at this stage i could no longer tab through my radio buttons.

5: :white_check_mark: disabling broadband internet: The page loads within 6 seconds, even with slow 3g throttling.

6: :white_check_mark: Disabling javascript: SVG's wont change shape if javascript is disabled in any other browser than chromium browsers, you can read all about this in the "Issues with other browsers" section above.

7: :exclamation: :question: disabling coockies/local storage: my page does not use local storage, sadly i cannot write a feature detect to deal with this issue.

:star: My app is rendering pages serverside and is fully functional on chromium browsers without coockies, local storage and javascript.

