# notes

## change log
- v1.4 - save to localStorage
  - set up global variables sheet
  - load() function that loads in the save data
  - refresh() that updates the webpage and the arrays for research
- v1.5
	- deactivate research buttons until you can afford them?
- update html and buy functions to display in altinlar instead of kurler

## game structure
currency - kurler, yiralar, altinlar   
	30 kurler in a yira, 12 yiralar in an altin  
mahisti family  
sell something, produce 1 kur  
hire employees - start at 5  
buy storefronts - start at 1080  
buy ships - start at 43,200

mid-game - discover the sea serpent secret

later - buy arast  
hire kahya, each kahya hires 5 more kahyalar (find the karaman mahisti doc from alex to check this)  
once you've hired all the kahyalar, option to Take Over Arast  

loans to other countries - costs $, brings in interest  

improve the country - education, social improvements, infrastructure, etc  

end game - own the whole world  

## mechanics

- money balance and button to generate new
	- convert to yira and altin
	- 35 kurler is 1 yira and 5 kurler
	- 360 kurler is 1 altin
- research section
	- options become available at certain times
- employees, cost for new employee, button to hire
- shops, cost for new shop, button to open new
- ships, cost for new ship, button to buy new ship
	- launch and track journeys? button to launch ship, progress bar, money is updated when it gets back
		- could also risk shipwreck occasionally - random number generator
- kahyalar recruited, cost to recruit new kahya, button to recruit
	- 10k kahyalar "the shahre have"
	- 3750 = more than in the palace
	- 19000 = more than in the country, including the army
	- Five altınlar would build and outfit a brand-new ship, hire and supply a crew, and fill her hold with a modest cargo for a month’s voyage out to Amariyan or Imakami (this can't be right)

### phase 3

- loans section
- taxes section
- citizen satisfaction section

## research

### phase 1

- hire employees - start at 5
	- each employee produces 1 money per second
	- un-hides the employees section at 3
- open shops - start at 1000
	- each shop produces 120 money (4 yiralar) per 5 seconds
	- un-hides the stores section at 750
- improve shops:
	- renovate
	- train employees
	- upgrade raw materials (not sure how to multiply)
- start a shipping fleet
	- each ship produces 15000 money per 45 seconds
	- un-hides the ship section
- improve ships:
	- speed up
	- paint (doesn't do anything, but looks cool)
	- pray for blessings from the gods (reduces rate of shipwrecks)
- discover the secret to avoiding the sea serpents
	- monopoly on trading for 6 weeks every summer, increases revenue by XX

### phase 2

- recruit a kahya
	- LOSE money
	- each kahya recruits another XX kahyalar per XX
	- randomize this
- once XXXX kahyalar are recruited...overthrow the Shahre and take over Arast

### phase 3

no more employees, no more shops, fleet is owned by the crown  
- loan money to XX country
	- costs $ but earns interest
- charge taxes on industries
happiness/satisfaction rating? spend satisfaction points?
- open cadet academy
- open nationwide primary education
- invest in fringe guard training
- invest in core guard training
- ubi for kahyalar
- open orphanage
- investigate the break-in at the shipbuilder's guild

## html codes

- a with umlaut - `&#228;`
- u with umlaut - `&#252;`
- i without dot - `&#305;`
- c cedilla - uppercase `&#199;` and lowercase `&#231;`
- s cedilla - uppercase `&#350;` and lowercase `&#351;`

- kip - `&#8365;`
- yen - `&#165;` or `&yen;`
- austral - `&#8371;`
