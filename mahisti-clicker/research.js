var research = [];
var activeResearch = [];

var research1 = {
  id: "researchButton1",
  title: "Hire employees",
  priceTag: "",
  description: "Automate your sales - each employee generates 1 kür per second",
  trigger: function() {return balance >= 3},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research1.flag = 1;
    employeesDiv.classList.remove("hidden");
    research1.element.parentNode.removeChild(research1.element);
    let index = activeResearch.indexOf(research1);
    activeResearch.splice(index, 1);
  }
}

research.push(research1);

var research2 = {
  id: "researchButton2",
  title: "Employee training ",
  priceTag: "(7 \u024e / 210 \u20ad)",
  description: "Employees generate 10% more revenue",
  trigger: function() {return research1.flag === 1},
  uses: 1,
  cost: function() {return balance >= 210},
  flag: 0,
  element: null,
  effect: function() {
    research2.flag = 1;
    balance -= 210;
    empMult += 0.1;
    research2.element.parentNode.removeChild(research2.element);
    let index = activeResearch.indexOf(research2);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research2);

var research3 = {
  id: "researchButton3",
  title: "Overtime contracts ",
  priceTag: "(2 \u023a / 720 \u20ad)",
  description: "Happier employees generate 25% more revenue",
  trigger: function() {return research2.flag === 1},
  uses: 1,
  cost: function() {return balance >= 720},
  flag: 0,
  element: null,
  effect: function() {
    research3.flag = 1;
    balance -= 720;
    empMult += 0.25;
    research3.element.parentNode.removeChild(research3.element);
    let index = activeResearch.indexOf(research3);
    activeResearch.splice(index, 1);
  }
}

research.push(research3);

var research4 = {
  id: "researchButton4",
  title: "Convert kürler to yiralar and alt\u0131nlar ",
  priceTag: "",
  description: "Doesn't affect revenue, but it is easier to read!",
  trigger: function() {return balance >= 800},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research4.flag = 1;
    convertCurrency(balance);
    currency.classList.remove("hidden");
    research4.element.parentNode.removeChild(research4.element);
    let index = activeResearch.indexOf(research4);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research4);

var research5 = {
  id: "researchButton5",
  title: "Open shops",
  priceTag: "",
  description: "Sell your wares from shops - each shop generates 4 yiralar (120 \u20ad) every 5 seconds",
  trigger: function() {return balance >= 750},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research5.flag = 1;
    shopsDiv.classList.remove("hidden");
    research5.element.parentNode.removeChild(research5.element);
    let index = activeResearch.indexOf(research5);
    activeResearch.splice(index, 1);
  }
}

research.push(research5);

var research6 = {
  id: "researchButton6",
  title: "Apprentice system ",
  priceTag: "(7 alt\u0131nlar)",
  description: "Trains young workers, increasing long-term efficiency",
  trigger: function() {return research4.flag === 1 && shops >= 1},
  uses: 1,
  cost: function() {return balance >= 2520},
  flag: 0,
  element: null,
  effect: function() {
    research6.flag = 1;
    balance -= 2520;
    empMult += 0.2;
    shopsMult += 0.2;
    research6.element.parentNode.removeChild(research6.element);
    let index = activeResearch.indexOf(research6);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research6);

var research7 = {
  id: "researchButton7",
  title: "Launch loyalty program ",
  priceTag: "(18 alt\u0131nlar)",
  description: "Customers return more often, increasing revenue",
  trigger: function() {return research5.flag === 1},
  uses: 1,
  cost: function() {return balance >= 6480},
  flag: 0,
  element: null,
  effect: function() {
    research7.flag = 1;
    balance -= 6480;
    shopsMult += 0.15;
    research7.element.parentNode.removeChild(research7.element);
    let index = activeResearch.indexOf(research7);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research7);

var research8 = {
  id: "researchButton8",
  title: "Improve marketing ",
  priceTag: "(36 alt\u0131nlar)",
  description: "Increases customer patronage",
  trigger: function() {return research7.flag === 1},
  uses: 1,
  cost: function() {return balance >= 12960},
  flag: 0,
  element: null,
  effect: function() {
    research8.flag = 1;
    balance -= 12960;
    shopsMult += 0.3;
    research8.element.parentNode.removeChild(research8.element);
    let index = activeResearch.indexOf(research8);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research8);

var research9 = {
  id: "researchButton9",
  title: "Dynamic bartering ",
  priceTag: "(48 alt\u0131nlar)",
  description: "Skilled negotiators improve trade deals, raising earnings",
  trigger: function() {return research6.flag === 1 && shops >= 5},
  uses: 1,
  cost: function() {return balance >= 17280},
  flag: 0,
  element: null,
  effect: function() {
    research9.flag = 1;
    balance -= 17280;
    empMult += 0.25;
    shopsMult += 0.4;
    research9.element.parentNode.removeChild(research9.element);
    let index = activeResearch.indexOf(research9);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research9);

var research10 = {
  id: "researchButton10",
  title: "Renovate shops ",
  priceTag: "(10 \u023a per shop)",
  description: "Shops generate 50% higher revenue",
  trigger: function() {return research8.flag === 1},
  uses: 1,
  cost: function() {return balance >= 3600 * shops},
  flag: 0,
  element: null,
  effect: function() {
    research10.flag = 1;
    balance -= 3960 * shops;
    shopsMult += 0.5;
    research10.element.parentNode.removeChild(research10.element);
    let index = activeResearch.indexOf(research10);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research10);

var research11 = {
  id: "researchButton11",
  title: "Start a fleet",
  priceTag: "",
  description: "Trade your wares across the sea - each ship generates 14 alt\u0131nlar every 20 seconds",
  trigger: function() {return balance >= 30000},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research11.flag = 1;
    fleetDiv.classList.remove("hidden");
    research11.element.parentNode.removeChild(research11.element);
    let index = activeResearch.indexOf(research11);
    activeResearch.splice(index, 1);
  }
}

research.push(research11);

var research12 = {
  id: "researchButton12",
  title: "Master craftsmen ",
  priceTag: "(210 alt\u0131nlar)",
  description: "Hire expert artisans to refine goods, boosting value",
  trigger: function() {return research9.flag === 1 && ships >= 1},
  uses: 1,
  cost: function() {return balance >= 75600},
  flag: 0,
  element: null,
  effect: function() {
    research12.flag = 1;
    balance -= 75600;
    empMult += 0.3;
    shopsMult += 0.5;
    fleetMult += 0.5;
    research12.element.parentNode.removeChild(research12.element);
    let index = activeResearch.indexOf(research12);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research12);

var research13 = {
  id: "researchButton13",
  title: "New hull materials ",
  priceTag: "(275 alt\u0131nlar)",
  description: "Improves speed and durability of ships; increases revenue by 30%",
  trigger: function() {return research11.flag === 1},
  uses: 1,
  cost: function() {return balance >= 99000},
  flag: 0,
  element: null,
  effect: function() {
    research13.flag = 1;
    balance -= 99000;
    fleetMult += 0.3;
    research13.element.parentNode.removeChild(research13.element);
    let index = activeResearch.indexOf(research13);
    activeResearch.splice(index, 1);
  }
}

research.push(research13);

var research14 = {
  id: "researchButton14",
  title: "Research fluid dynamics ",
  priceTag: "(425 alt\u0131nlar)",
  description: "Ships are faster; increases revenue by 50%",
  trigger: function() {return research13.flag === 1},
  uses: 1,
  cost: function() {return balance >= 153000},
  flag: 0,
  element: null,
  effect: function() {
    research14.flag = 1;
    balance -= 153000;
    fleetMult += 0.5;
    research14.element.parentNode.removeChild(research14.element);
    let index = activeResearch.indexOf(research14);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research14);

var research15 = {
  id: "researchButton15",
  title: "Expand international market ",
  priceTag: "(580 alt\u0131nlar)",
  description: "Expands international trade, increasing all profits",
  trigger: function() {return research12.flag === 1 && ships >= 1},
  uses: 1,
  cost: function() {return balance >= 208800},
  flag: 0,
  element: null,
  effect: function() {
    research15.flag = 1;
    balance -= 208800;
    empMult += 0.2;
    shopsMult += 0.3;
    fleetMult += 0.5;
    research15.element.parentNode.removeChild(research15.element);
    let index = activeResearch.indexOf(research15);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research15);

var research16 = {
  id: "researchButton16",
  title: "Paint hulls ",
  priceTag: "(72 \u023a per ship)",
  description: "No impact on sailing, but our ships look better than any others on the ocean!",
  trigger: function() {return ships >= 10},
  uses: 1,
  cost: function() {return balance >= 25920 * ships},
  flag: 0,
  element: null,
  effect: function() {
    research16.flag = 1;
    balance -= 25920 * ships;
    //TODO nextShip += 72000;
    research16.element.parentNode.removeChild(research16.element);
    let index = activeResearch.indexOf(research16);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research16);

var research17 = {
  id: "researchButton17",
  title: "Open gold mines ",
  priceTag: "",
  description: "Invest in gold by opening your own gold mines",
  trigger: function() {return balance >= 1000000},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research17.flag = 1;
    minesDiv.classList.remove("hidden");
    research17.element.parentNode.removeChild(research17.element);
    let index = activeResearch.indexOf(research17);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research17);

var research18 = {
  id: "researchButton18",
  title: "Deeper drilling ",
  priceTag: "(5,600 alt\u0131nlar)",
  description: "Extracts 20% more gold per cycle",
  trigger: function() {return mines >= 2},
  uses: 1,
  cost: function() {return balance >= 2016000},
  flag: 0,
  element: null,
  effect: function() {
    research18.flag = 1;
    balance -= 2016000;
    minesMult += 0.2;
    research18.element.parentNode.removeChild(research18.element);
    let index = activeResearch.indexOf(research18);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research18);

var research19 = {
  id: "researchButton19",
  title: "Famed merchant dynasty ",
  priceTag: "(12,000 alt\u0131nlar)",
  description: "The Mahisti name carries weight, increasing all trade profits",
  trigger: function() {return balance >= 3000000 && mines >= 1},
  uses: 1,
  cost: function() {return balance >= 4320000},
  flag: 0,
  element: null,
  effect: function() {
    research19.flag = 1;
    balance -= 4320000;
    empMult += 0.4;
    shopsMult += 0.4;
    fleetMult += 0.4;
    minesMult += 0.4;
    research19.element.parentNode.removeChild(research19.element);
    let index = activeResearch.indexOf(research19);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research19);

var research20 = {
  id: "researchButton20",
  title: "Gold purification ",
  priceTag: "(24,000 alt\u0131nlar)",
  description: "Increases the value of gold ore",
  trigger: function() {return research18.flag === 1},
  uses: 1,
  cost: function() {return balance >= 8640000},
  flag: 0,
  element: null,
  effect: function() {
    research20.flag = 1;
    balance -= 8640000;
    minesMult += 0.25;
    research20.element.parentNode.removeChild(research20.element);
    let index = activeResearch.indexOf(research20);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research20);

var research21 = {
  id: "researchButton21",
  title: "Underground tunnels ",
  priceTag: "(80,000 alt\u0131nlar)",
  description: "Expands mining operations, unlocking more gold reserves",
  trigger: function() {return research20.flag === 1},
  uses: 1,
  cost: function() {return balance >= 28800000},
  flag: 0,
  element: null,
  effect: function() {
    research21.flag = 1;
    balance -= 28800000;
    minesMult += 0.3;
    research21.element.parentNode.removeChild(research21.element);
    let index = activeResearch.indexOf(research21);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research21);

var research22 = {
  id: "researchButton22",
  title: "Begin researching sea serpents ",
  priceTag: "(125,000 \u023a)",
  description: "Launch research expeditions to learn more about the sea serpents",
  trigger: function() {return research19.flag === 1},
  uses: 1,
  cost: function() {return balance >= 45000000},
  flag: 0,
  element: null,
  effect: function() {
    research22.flag = 1;
    expeditionsDiv.classList.remove("hidden");
    balance -= 45000000;
    research22.element.parentNode.removeChild(research22.element);
    let index = activeResearch.indexOf(research22);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research22);

var research23 = {
  id: "researchButton23",
  title: "Shallow waters survey ",
  priceTag: "",
  description: "Explore coastal waters - ships rarely encounter serpents but find fewer useful insights",
  trigger: function() {return researchShips >= 1},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research23.flag = 1;
    typePicker.classList.remove("hidden");
    research23.element.parentNode.removeChild(research23.element);
    let index = activeResearch.indexOf(research23);
    activeResearch.splice(index, 1);
  }
}

research.push(research23);

var research24 = {
  id: "researchButton24",
  title: "Deep sea study ",
  priceTag: "(100 points)",
  description: "Venture into open waters - serpent attacks are possible, but payoff is greater",
  trigger: function() {return research23.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 100},
  flag: 0,
  element: null,
  effect: function() {
    research24.flag = 1;
    researchPoints -= 100;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Deep sea study";
    el.value = 30;
    list.appendChild(el);
    research24.element.parentNode.removeChild(research24.element);
    let index = activeResearch.indexOf(research24);
    activeResearch.splice(index, 1);
  }
}

research.push(research24);

var research25 = {
  id: "researchButton25",
  title: "Forbidden waters expedition ",
  priceTag: "(300 points)",
  description: "Directly sail into serpent territory - high chance of losses but largest payoff",
  trigger: function() {return research24.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 300},
  flag: 0,
  element: null,
  effect: function() {
    research25.flag = 1;
    researchPoints -= 300;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Forbidden waters expedition";
    el.value = 10;
    list.appendChild(el);
    research25.element.parentNode.removeChild(research25.element);
    let index = activeResearch.indexOf(research25);
    activeResearch.splice(index, 1);
  }
}

research.push(research25);

var research26 = {
  id: "researchButton26",
  title: "Hire inexperienced crews ",
  priceTag: "(20 points)",
  description: "Inexperienced (Level 1) crews are cheap, but more likely to make mistakes",
  trigger: function() {return researchPoints >= 10},
  uses: 1,
  cost: function() {return researchPoints >= 20},
  flag: 0,
  element: null,
  effect: function() {
    research26.flag = 1;
    crewPicker.classList.remove("hidden");
    researchPoints -= 20;
    pointsCount.innerText = researchPoints;
    research26.element.parentNode.removeChild(research26.element);
    let index = activeResearch.indexOf(research26);
    activeResearch.splice(index, 1);
  }
}

research.push(research26);

var research27 = {
  id: "researchButton27",
  title: "Hire more experienced crews ",
  priceTag: "(150 points)",
  description: "More experienced (Level 2) crews are more expensive, but more likely to survive",
  trigger: function() {return research26.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 150},
  flag: 0,
  element: null,
  effect: function() {
    research27.flag = 1;
    researchPoints -= 150;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 2";
    el.value = 15;
    list.appendChild(el);
    research27.element.parentNode.removeChild(research27.element);
    let index = activeResearch.indexOf(research27);
    activeResearch.splice(index, 1);
  }
}

research.push(research27);

var research28 = {
  id: "researchButton28",
  title: "Hire very experienced crews ",
  priceTag: "(400 points)",
  description: "Very experienced (Level 3) crews are most expensive, but most likely to survive",
  trigger: function() {return research27.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 400},
  flag: 0,
  element: null,
  effect: function() {
    research28.flag = 1;
    researchPoints -= 400;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 3";
    el.value = 20;
    list.appendChild(el);
    research28.element.parentNode.removeChild(research28.element);
    let index = activeResearch.indexOf(research28);
    activeResearch.splice(index, 1);
  }
}

research.push(research28);

var research29 = {
  id: "researchButton29",
  title: "Low quality supplies ",
  priceTag: "(50 points)",
  description: "Supply your research fleet with supplies and equipment",
  trigger: function() {return researchPoints >= 30},
  uses: 1,
  cost: function() {return researchPoints >= 50},
  flag: 0,
  element: null,
  effect: function() {
    research29.flag = 1;
    equipmentPicker.classList.remove("hidden");
    researchPoints -= 50;
    pointsCount.innerText = researchPoints;
    research29.element.parentNode.removeChild(research29.element);
    let index = activeResearch.indexOf(research29);
    activeResearch.splice(index, 1);
  }
}

research.push(research29);

var research30 = {
  id: "researchButton30",
  title: "Medium quality supplies ",
  priceTag: "(200 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research29.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 200},
  flag: 0,
  element: null,
  effect: function() {
    research30.flag = 1;
    researchPoints -= 200;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "Medium quality";
    el.value = 15;
    list.appendChild(el);
    research30.element.parentNode.removeChild(research30.element);
    let index = activeResearch.indexOf(research30);
    activeResearch.splice(index, 1);
  }
}

research.push(research30);

var research31 = {
  id: "researchButton31",
  title: "High quality supplies ",
  priceTag: "(500 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research30.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 500},
  flag: 0,
  element: null,
  effect: function() {
    research31.flag = 1;
    researchPoints -= 500;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "High quality supplies";
    el.value = 20;
    list.appendChild(el);
    research31.element.parentNode.removeChild(research31.element);
    let index = activeResearch.indexOf(research31);
    activeResearch.splice(index, 1);
  }
}

research.push(research31);

var research32 = {
  id: "researchButton32",
  title: "Advanced escape plans ",
  priceTag: "(300,000 alt\u0131nlar)",
  description: "Invest in diversion tactics to improve expedition success rates",
  trigger: function() {return balance >= 50000000 && research25.flag === 1},
  uses: 1,
  cost: function() {return balance >= 108000000},
  flag: 0,
  element: null,
  effect: function() {
    research32.flag = 1;
    balance -= 108000000;
    escapePlans.classList.remove("hidden");
    escapePlansFlag = 5;
    research32.element.parentNode.removeChild(research32.element);
    let index = activeResearch.indexOf(research32);
    activeResearch.splice(index, 1);
  }
}

research.push(research32);

var research34 = {
  id: "researchButton34",
  title: "Launch the \"Ocean's Light\" ",
  priceTag: "(1,000 points)",
  description: "Make the maiden voyage from Ara\u015ft to Amariyan",
  trigger: function() {return research31.flag === 1 && researchPoints > 500},
  uses: 1,
  cost: function() {return researchPoints >= 1000},
  flag: 0,
  element: null,
  effect: function() {
    research34.flag = 1;
    discoveredSecretAnnouncementDiv.classList.remove("hidden");
    expeditionsDiv.classList.add("hidden");
    empMult += 0.5;
    shopsMult += 0.5;
    fleetMult += 0.5;
    minesMult += 0.5;
    research34.element.parentNode.removeChild(research34.element);
    let index = activeResearch.indexOf(research34);
    activeResearch.splice(index, 1);
  }
}

research.push(research34);

var research35 = {
  id: "researchButton35",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research35.flag = 1;

    research35.element.parentNode.removeChild(research35.element);
    let index = activeResearch.indexOf(research35);
    activeResearch.splice(index, 1);
  }
}

research.push(research35);

var research36 = {
  id: "researchButton36",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research36.flag = 1;

    research36.element.parentNode.removeChild(research36.element);
    let index = activeResearch.indexOf(research36);
    activeResearch.splice(index, 1);
  }
}

research.push(research36);

var research40 = {
  id: "researchButton40",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research40.flag = 1;

    research40.element.parentNode.removeChild(research40.element);
    let index = activeResearch.indexOf(research40);
    activeResearch.splice(index, 1);
  }
}

research.push(research40);

/* var researchX = {
  id: "researchButtonX",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    researchX.flag = 1;

    researchX.element.parentNode.removeChild(researchX.element);
    let index = activeResearch.indexOf(researchX);
    activeResearch.splice(index, 1);
  }
}
  
research.push(researchX);
*/
