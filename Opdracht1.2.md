# Browser Technologies
## Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

### Doel van deze opdracht
Het doel van de deze opdracht is leren hoe je een website kan testen in verschillende browsers en devices, en hoe een screenreader werkt.



### Uitleg
Pas Progressive enhancement toe op je OBA Web App. Test de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.

Test je OBA opdracht op verschillende devices en browsers. Noteer welk device en welke browsers je hebt getest. TEst je OBA opdracht minimaal in 3 devices, en naast Chrome in Firefox en nog een andere browser.

Laat je website voorlezen door een screenreader. 


### Criteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van alle features die je hebt getest
  - een beschrijving van de Devices en browsers waar je op hebt getest
  - een beschrijving van de screenreader test
  - beschrijf hoe je de problemen hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

## geen breedband internet:
Mijn applicatie toonde waar nodig een loading state zodat er geen leeg scherm te zien was tijdens het ophalen van data uit de api, wanneer er wel data in local storage zat werden er meteen resultaten getoond, alleen kwamen de afbeeldingen een stuk later...

![images slow 3G](https://user-images.githubusercontent.com/36195440/76603073-96aaa480-650c-11ea-86c4-bbbcb23ef252.png)

Wanneer er geen data in localstorage is was dit het resultaat:

![slow 3g](https://user-images.githubusercontent.com/36195440/76603709-bf7f6980-650d-11ea-9044-6b9ab7fbf4b0.png)

## geen afbeeldingen in chrome / brave / firefox:

Ik heb veel gebruik gemaakt van background images, wat ik in dit geval wel goed gedaan heb is mijn containers een standaard hoogte en breedte te geven waardoor de ruimte niet vrijgeven wordt en de UI intact blijft ook hebben mijn tekstvelden een sterk contrasterende achtergrond zodat deze niet wegvallen tegen een wite achtergrond.

> Firefox geeft "placeholders" die je laat weten dat er eigenlijk afbeeldingen horen te staan, chrome en brave tonen niks...

![geef afb firefox](https://user-images.githubusercontent.com/36195440/76524749-e5076700-646a-11ea-8529-503e5dddfa7e.jpg)![geef afb brave](https://user-images.githubusercontent.com/36195440/76524745-e33da380-646a-11ea-9177-25780fd2f6a2.jpg)

## custom fonts uitzetten in chrome / brave / firefox:

Ik heb geen fallback fonts gedefineerd, als ik de pagina refresh krijg ik meteen het standaardfont te zien.

![no fonts](https://user-images.githubusercontent.com/36195440/76525796-ce620f80-646c-11ea-9f41-2fdc85510b01.jpg)

## kleurenblindheid test

In mijn WAFS applicatie heb ik niet genoeg contrast toegepast in mijn links, deze staan op een achtergrond met kleur zodat ik hem zelf beter kon zien maar met een blue-blind beperking zie ik ze amper.

![kleurenblindheid SLECHT](https://user-images.githubusercontent.com/36195440/76526391-bccd3780-646d-11ea-9cb6-ebd2a600e91c.jpg)

## muis/trackpad werkt niet

Door mijn applicatie van het frontend vak van project web valt prima te tabben behalve wanneer je dit met een screenreader doet, belangrijke kopjes die als H1 staan kunnen niet op gefocust worden en worden dus ook neit voorgelezen waardoor het niet duidelijk is dat de content daarna daartoe toebehoort.

een leuke bevinding is [deze optie](https://www.online-tech-tips.com/cool-websites/control-mouse-with-keyboard/) waar je met je toetsenbord je muis kan besturen...

## geen local storage / coockies

Hier merkte ik dat mijn applicatie niet meer werkte, ik had mijn code zo geschreven dat er eerst in local storage dmv een if statement gekeken word of er data aanwezig is deze getoond werd. Ik was mij er niet van bewust dat de code stuk zou lopen en dacht dat hij gewoon een api call zou uitvoeren zoals hij had gedaan wanneer localstorage wel aan stond.

Ik had dit kunnen oplossen door eerst te kijken of er uberhaupt local storage is EN of ik hiertoe toegang heb/had.

![local storage error](https://user-images.githubusercontent.com/36195440/76601655-a96faa00-6509-11ea-925b-6b752fd8cfdb.png)

En de code die ik geschreven had:

```javascript
  getCocktails: function() {
    const userInput = document.getElementById("ingredient").value;
    if (localStorage.getItem("'" + userInput + "'") === null) {
      console.log("doesnt exist in local storage")
      api.fetchCocktails()
    } else {
      console.log("overview exists in local storage")
      const retrievedData = JSON.parse(localStorage.getItem("'" + userInput + "'"))
      data.filterOverview(retrievedData);
    }
  },
  ```
  
  Het resultaat in mijn applicatie:
  
  ![local storage uit](https://user-images.githubusercontent.com/36195440/76601751-dde36600-6509-11ea-9fca-322d3c717a49.png)
