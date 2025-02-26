var research = [];
var activeResearch = [];

var research1 = {
  id: "researchButton1",
  title: "Hire employees",
  priceTag: "",
  description: "Automate your sales - each employee generates 1 kür per second",
  trigger: function() {return balance >= 3},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research1.flag = 1;
    //displayMessage("You can now hire employees")
    employeesDiv.classList.remove("hidden");
    research1.element.parentNode.removeChild(research1.element);
    let index = activeResearch.indexOf(research1);
    activeResearch.splice(index, 1);
  }
}

research.push(research1);

var research2 = {
  id: "researchButton2",
  title: "Open shops",
  priceTag: "",
  description: "Sell your wares from shops - each shop generates 120 kürler (4 yiralar) every 5 seconds",
  trigger: function() {return balance >= 750},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research2.flag = 1;
    //displayMessage("You can now hire employees")
    shopsDiv.classList.remove("hidden");
    research2.element.parentNode.removeChild(research2.element);
    let index = activeResearch.indexOf(research2);
    activeResearch.splice(index, 1);
  }
}

research.push(research2);

var research3 = {
  id: "researchButton3",
  title: "Employee training ",
  priceTag: "(500 kürler)",
  description: "Employees generate 25% higher revenue",
  trigger: function() {return balance >= 400},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research3.flag = 1;
    //displayMessage("")
    balance -= 500;
    empMult += 0.25;
    research3.element.parentNode.removeChild(research3.element);
    let index = activeResearch.indexOf(research3);
    activeResearch.splice(index, 1);
  }
}

research.push(research3);

var research4 = {
  id: "researchButton4",
  title: "Renovate shops ",
  priceTag: "(30,000 kürler)",
  description: "Shops generate 50% higher revenue",
  trigger: function() {return balance >= 20000},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research4.flag = 1;
    //displayMessage("")
    balance -= 30000;
    shopsMult += 0.5;
    research4.element.parentNode.removeChild(research4.element);
    let index = activeResearch.indexOf(research4);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research4);

var research5 = {
  id: "researchButton5",
  title: "Convert kürler to yiralar and altınlar ",
  priceTag: "",
  description: "Doesn't affect revenue, but easier to read!",
  trigger: function() {return balance >= 500},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research5.flag = 1;
    //displayMessage("")
    currency.classList.remove("hidden");
    research5.element.parentNode.removeChild(research5.element);
    let index = activeResearch.indexOf(research5);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research5);

var research6 = {
  id: "researchButton6",
  title: "Start a fleet",
  priceTag: "",
  description: "Trade your wares across the sea - each ship generates 15,000 kürler every 45 seconds",
  trigger: function() {return balance >= 75000},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research6.flag = 1;
    //displayMessage("You can now hire employees")
    fleetDiv.classList.remove("hidden");
    research6.element.parentNode.removeChild(research6.element);
    let index = activeResearch.indexOf(research6);
    activeResearch.splice(index, 1);
  }
}

research.push(research6);

var research7 = {
  id: "researchButton7",
  title: "New hull materials ",
  priceTag: "(200,000 kürler)",
  description: "Improves speed and durability of ships; increases revenue by 15%",
  trigger: function() {return ships >= 3},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research7.flag = 1;
    //displayMessage("")
    balance -= 200000;
    fleetMult += 0.15;
    research7.element.parentNode.removeChild(research7.element);
    let index = activeResearch.indexOf(research7);
    activeResearch.splice(index, 1);
  }
}

research.push(research7);

var research8 = {
  id: "researchButton8",
  title: "Research fluid dynamics ",
  priceTag: "(300,000 kürler)",
  description: "Ships are faster; increases revenue by 35%",
  trigger: function() {return ships >= 6},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research8.flag = 1;
    //displayMessage("")
    balance -= 300000;
    fleetMult += 0.35;
    research8.element.parentNode.removeChild(research8.element);
    let index = activeResearch.indexOf(research8);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research8);

var research9 = {
  id: "researchButton9",
  title: "Paint hulls ",
  priceTag: "(75,000 kürler per ship)",
  description: "No impact on sailing, but our ships look better than any others on the ocean!",
  trigger: function() {return ships >= 10},
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research9.flag = 1;
    //displayMessage("")
    balance -= 75000 * ships;
    research9.element.parentNode.removeChild(research9.element);
    let index = activeResearch.indexOf(research9);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research9);

var research10 = {
  id: "researchButton10",
  title: "Begin researching ways to sail during serpent season ",
  priceTag: "",
  description: "",
  trigger: function() {return },
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    research10.flag = 1;
    //displayMessage("")
    col3.classList.remove("hidden");
    research10.element.parentNode.removeChild(research10.element);
    let index = activeResearch.indexOf(research10);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research10);

/* var researchX = {
  id: "researchButtonX",
  title: "",
  priceTag: "(XX kür)",
  description: "",
  trigger: function() {return },
  uses: 1,
  //cost: , function returns TRUE when you can afford it (changes style)
  flag: 0,
  element: null,
  effect: function() {
    researchX.flag = 1;
    //displayMessage("")

    researchX.element.parentNode.removeChild(researchX.element);
    let index = activeResearch.indexOf(researchX);
    activeResearch.splice(index, 1);
  }
}
  
research.push(researchX);
*/
