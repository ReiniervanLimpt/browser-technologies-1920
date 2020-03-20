# vragen week 2:

1: Ik heb mij allereerst gefocussed op het tacklen van mijn opdracht, namelijk: Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.

Ik heb met hulp van Menno een manier gevonden om de aanpassingen die de gebruiker maakt aan zijn ontwerp op te slaan in een json file met een uniek id! met wat tweaks kan de gebuiker zijn shirt adhv dat id weer ophalen. dus alles op het printen na werkt! (bijna) daarom mijn vraag... is het serveren van en jpeg bij t klikken op "print" voldoende om aan deze criteria te voldoen of hangt daar nog een stukje usability of "pleasurability" aan vast??

2: Ik struikel een beetje over "custom fonts uitzetten" in mijn hoofd is een goede fallback serif of sans-serif... ik wil namelijk gebruik maken van de native fonts van het os waarop de gebruiker mijn app bekijkt, en op basis daarvan kijken welk OS serif of sans-serif gebruikt.

3: Heb(ben) je/jullie nog wat bronnen waar ik informatie uit kan halen voor het bruikbaar maken van een form met screenreaders?? ik heb een uur/anderhalf uur gedaan over het juist opstellen van mijn form met aria-labels ed. maar ik weet niet zo goed welke knoppen iemand die alleen met een screenreader navigeert gebruikt en welke labels,fieldsets, legends of wat dan ook belangrijk zijn...

## T shirt creator

My use case:

* Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.

### Functional: HTML

Renders a basic HTML form with proper tags for screenreader and feedback when posting the form.

### Usable: CSS

positions elements within the form and gives feedback based on selected input value, shirt changes with animations showing what changes in the design.

### Pleasurable: JS

morphs SVG shapes on the T-shirt and hides or displays elements when they are not needed ie. a button which skips to the next input when the previous input has been filled in, it also reminds the user to save when a new change to the design has been made.

![dekt](https://user-images.githubusercontent.com/36195440/76963329-27282100-6921-11ea-8b89-961c5153d029.jpg)
![deskt2](https://user-images.githubusercontent.com/36195440/76963334-298a7b00-6921-11ea-95e4-eba98569306d.jpg)
