# notes

## change log

- v2
	- new research options
	- auto save every minute
- v1.5
	- deactivate research buttons until user can afford them
- v1.4 - save to localStorage
  - set up global variables sheet
  - load() function that loads in the save data
  - refresh() that updates the webpage and the arrays for research
- future
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
pirate pact during this phase  

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

### phase 2

#### research tiers

- Research Expeditions – Send out scouts and risk losing ships to gather serpent behavior data.
- Guild Secrets – Unlock hidden knowledge through political maneuvering and espionage.
- Serpent Tracking Network – Players manage a network of informants across ports for early warnings.
- steal info about serpents from other countries doing research

- kahyalar recruited, cost to recruit new kahya, button to recruit
	- 10k kahyalar "the shahre have"
	- 3750 = more than in the palace
	- 19000 = more than in the country, including the army
	- Five altınlar would build and outfit a brand-new ship, hire and supply a crew, and fill her hold with a modest cargo for a month’s voyage out to Amariyan or Imakami (this can't be right)

#### invest in research mini game: Launch Research Expedition

- expedition types
	- Shallow Waters Survey (Low Risk, Low Reward): Explore coastal waters to gather minor clues. Ships rarely encounter serpents but find fewer useful insights.
	- Deep Sea Study (Medium Risk, Medium Reward): Venture into open waters where serpent attacks are possible. Greater chance of discovering migration patterns or weaknesses.
	- Forbidden Waters Expedition (High Risk, High Reward): Directly sail into known serpent territory. High chance of ship losses but could reveal game-changing serpent deterrents.
- expedition options
	- Number of Ships – More ships increase success chances but also increase potential losses.
	- Crew Experience Level – Trained sailors reduce risk but cost more.
	- Supplies & Equipment – Harpoons, bait, and decoys may help avoid attacks.
	- Escape Plans – Investing in fast ships or diversion tactics to reduce losses if things go bad.
- random events
	- "Uncharted Currents" – A hidden current speeds up travel but might push ships into danger.
	- "Serpent Nest Discovered" – Gain rare research data but must quickly retreat.
	- "Storm on the Horizon" – Forced decision: turn back safely or risk ships to push forward.
	- "Legendary Shipwreck" – Chance to salvage lost technology or maps, but staying too long attracts serpents.
	- "Serpent Attack" – Players must either sacrifice a ship, fight back (if weapons are available), or use a diversion tactic.
- results
	- Research Points – Used to unlock serpent-avoidance strategies and ship upgrades.
	- Survivor Bonuses – If more ships return, sailors gain experience, improving future expeditions.
	- Special Discoveries – Rare artifacts or knowledge that provide permanent upgrades.
	- Losses – Ships, supplies, or crew may not return, increasing long-term risk.


- occasionally lose a ship to the serpents
- build up another fleet for research?
- ocean's light - ship that did the first successful run in serpent season
- Bait & Decoy Tests – Experiment with different materials and techniques to divert serpent attacks.

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
