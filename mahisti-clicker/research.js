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
  priceTag: "(7 yiralar / 210 kürler)",
  description: "Employees generate 10% more revenue",
  trigger: function() {return employees >= 4},
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
  priceTag: "(2 altınlar / 720 kürler)",
  description: "Happier employees generate 25% more revenue",
  trigger: function() {return balance >= 500},
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
  title: "Convert kürler to yiralar and altınlar ",
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
  description: "Sell your wares from shops - each shop generates 4 yiralar (120 kürler) every 5 seconds",
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
  priceTag: "(7 altınlar)",
  description: "Trains young workers, increasing long-term efficiency",
  trigger: function() {return balance >= 2000 && shops >= 1},
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
  priceTag: "(18 altınlar)",
  description: "Customers return more often, increasing revenue",
  trigger: function() {return balance >= 4000},
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
  priceTag: "(36 altınlar)",
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
  priceTag: "(48 altınlar)",
  description: "Skilled negotiators improve trade deals, raising earnings",
  trigger: function() {return balance >= 15000 && shops >= 5},
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
  priceTag: "(10 altınlar per shop)",
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
  description: "Trade your wares across the sea - each ship generates 14 altınlar every 20 seconds",
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
  priceTag: "(210 altınlar)",
  description: "Hire expert artisans to refine goods, boosting value",
  trigger: function() {return balance >= 60000 && ships >= 1},
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
  priceTag: "(275 altınlar)",
  description: "Improves speed and durability of ships; increases revenue by 30%",
  trigger: function() {return ships >= 3},
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
  priceTag: "(425 altınlar)",
  description: "Ships are faster; increases revenue by 50%",
  trigger: function() {return ships >= 6},
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
  priceTag: "(580 altınlar)",
  description: "Expands international trade, increasing all profits",
  trigger: function() {return balance >= 170000 && ships >= 1},
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
  priceTag: "(72 altınlar per ship)",
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
  priceTag: "(5,600 altınlar)",
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
  priceTag: "(12,000 altınlar)",
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
  priceTag: "(24,000 altınlar)",
  description: "Increases the value of gold ore",
  trigger: function() {return balance >= 5000000},
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
  priceTag: "(120,000 altınlar)",
  description: "Expands mining operations, unlocking more gold reserves",
  trigger: function() {return balance >= 32000000},
  uses: 1,
  cost: function() {return balance >= 43200000},
  flag: 0,
  element: null,
  effect: function() {
    research21.flag = 1;
    balance -= 43200000;
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
  priceTag: "(XX altınlar)",
  description: "Launch research expeditions to learn more about the sea serpents",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research22.flag = 1;
    expeditionsDiv.classList.remove("hidden");
    research22.element.parentNode.removeChild(research22.element);
    let index = activeResearch.indexOf(research22);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research22);

/* var researchX = {
  id: "researchButtonX",
  title: "",
  priceTag: "(XX altınlar)",
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
