var balance = 1000000;

var employees = 1;
var shops = 0;
var ships = 0;
var mines = 0;

var nextEmployee = 5;
var nextShop = 1080;
var nextShip = 43200;
var nextMine = 1512000;

var empMult = 1;
var shopsMult = 120;
var fleetMult = 5040;
var minesMult = 180000;

var researchPoints = 0;
var researchShips = 0;
var nextResearchShip = 1;
var launchCost = 0;
var escapePlansFlag = 0;
var researchFleetTotal = 0;

const expeditionOptionsList = [
  {
    id: "exOpt23",
    title: "type1",
    picker: "type",
    value: 50,
    cost: 3,
    result: 10
  },
  {
    id: "exOpt24",
    title: "type2",
    picker: "type",
    value: 30,
    cost: 30,
    result: 50
  },
  {
    id: "exOpt25",
    title: "type3",
    picker: "type",
    value: 10,
    cost: 300,
    result: 100
  },
  {
    id: "exOpt26",
    title: "crew1",
    picker: "crew",
    value: 10,
    cost: 1
  },
  {
    id: "exOpt27",
    title: "crew2",
    picker: "crew",
    value: 15,
    cost: 10
  },
  {
    id: "exOpt28",
    title: "crew3",
    picker: "crew",
    value: 20,
    cost: 100
  },
  {
    id: "exOpt29",
    title: "equip1",
    picker: "equip",
    value: 10,
    cost: 1
  },
  {
    id: "exOpt30",
    title: "equip2",
    picker: "equip",
    value: 15,
    cost: 10
  },
  {
    id: "exOpt31",
    title: "equip3",
    picker: "equip",
    value: 20,
    cost: 100
  }
]
