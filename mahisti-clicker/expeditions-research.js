var research = [];
var activeResearch = [];

var research22 = {
  id: "researchButton22",
  title: "Begin researching sea serpents ",
  priceTag: "(3000 altınlar)",
  description: "Launch research expeditions to learn more about the sea serpents",
  trigger: function() {return balance >= 8},
  uses: 1,
  cost: function() {return balance >= 10},
  flag: 0,
  element: null,
  effect: function() {
    research22.flag = 1;
    expeditionsDiv.classList.remove("hidden");
    balance -= 10;
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
  description: "Venture into open waters - serpent attacks are possible, but greater payoff",
  trigger: function() {return research23.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 100},
  flag: 0,
  element: null,
  effect: function() {
    research24.flag = 1;
    researchPoints -= 100;
    pointsCount.innerText = researchPoints;
    var typeList = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Deep sea study";
    el.value = 10;
    typeList.appendChild(el);
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
    var typeList = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Forbidden waters expedition";
    el.value = 3;
    typeList.appendChild(el);
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
  title: "Hire somewhat experienced crews ",
  priceTag: "(150 points)",
  description: "Somewhat experienced (Level 2) crews are more expensive, but more likely to survive",
  trigger: function() {return research26.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 150},
  flag: 0,
  element: null,
  effect: function() {
    research27.flag = 1;
    researchPoints -= 150;
    pointsCount.innerText = researchPoints;
    var typeList = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 2";
    el.value = 10;
    typeList.appendChild(el);
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
    var typeList = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 3";
    el.value = 30;
    typeList.appendChild(el);
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
    var typeList = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "Medium quality";
    el.value = 10;
    typeList.appendChild(el);
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
    var typeList = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "High quality supplies";
    el.value = 30;
    typeList.appendChild(el);
    research31.element.parentNode.removeChild(research31.element);
    let index = activeResearch.indexOf(research31);
    activeResearch.splice(index, 1);
  }
}

research.push(research31);

var research32 = {
  id: "researchButton32",
  title: "Advanced escape plans ",
  priceTag: "(4,000 altınlar)",
  description: "Invest in diversion tactics to improve expedition success rates",
  trigger: function() {return balance >= 1000},
  uses: 1,
  cost: function() {return balance >= 1440},
  flag: 0,
  element: null,
  effect: function() {
    research32.flag = 1;
    balance -= 1440;
    escapePlans.classList.remove("hidden");
    escapePlansFlag = 5;
    research32.element.parentNode.removeChild(research32.element);
    let index = activeResearch.indexOf(research32);
    activeResearch.splice(index, 1);
  }
}

research.push(research32);

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