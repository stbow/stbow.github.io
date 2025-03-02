const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const balanceText = document.getElementById("balance");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const currency = document.getElementById("currency");
const altinlar = document.getElementById("altinlar");
const yiralar = document.getElementById("yiralar");
const kurler = document.getElementById("kurler");
const researchList = document.getElementById("research-list");
const employeesDiv = document.getElementById("employees-div");
const employeesCount = document.getElementById("employees-count");
const employeeCost = document.getElementById("employee-cost");
const shopsDiv = document.getElementById("shops-div");
const shopsCount = document.getElementById("shops-count");
const shopCost = document.getElementById("shop-cost");
const fleetDiv = document.getElementById("fleet-div");
const fleetCount = document.getElementById("fleet-count");
const fleetCost = document.getElementById("fleet-cost");
const minesDiv = document.getElementById("mines-div");
const minesCount = document.getElementById("mines-count");
const minesCost = document.getElementById("mines-cost");
const sell = document.getElementById("sell");
const hire = document.getElementById("hire");
const buyShop = document.getElementById("buy-shop");
const buyShip = document.getElementById("buy-ship");
const buyMine = document.getElementById("buy-mine");

var savegame;

var balance = 0;
var employees = 0;
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

saveBtn.onclick = save;
deleteBtn.onclick = deleteSave;
sell.onclick = sellItem;
hire.onclick = hireEmployee;
buyShop.onclick = newShop;
buyShip.onclick = newShip;
buyMine.onclick = newMine;

function sellItem() {
  balance++;
  balanceText.innerText = Math.floor(balance);
  convertCurrency(balance);
}

function hireEmployee() {
  if (balance >= nextEmployee) {
    employees++;
    balance -= nextEmployee;
    balanceText.innerText = Math.floor(balance);
    employeesCount.innerText = employees;
    nextEmployee = Math.floor(5 * Math.pow(1.2,employees));
    employeeCost.innerText = nextEmployee;
    convertCurrency(balance);
  }
}

function newShop() {
  if (balance >= nextShop) {
    shops++;
    balance -= nextShop;
    balanceText.innerText = Math.floor(balance);
    shopsCount.innerText = shops;
    nextShop = Math.floor(1080 * Math.pow(1.1,shops));
    shopCost.innerText = nextShop;
    convertCurrency(balance);
  }
}

function newShip() {
  if (balance >= nextShip) {
    ships++;
    balance -= nextShip;
    balanceText.innerText = Math.floor(balance);
    fleetCount.innerText = ships;
    nextShip = Math.floor(43200 * Math.pow(1.1,ships));
    fleetCost.innerText = nextShip;
    convertCurrency(balance);
  }
}

function newMine() {
  if (balance >= nextMine) {
    mines++;
    balance -= nextMine;
    balanceText.innerText = Math.floor(balance);
    minesCount.innerText = mines;
    nextMine = Math.floor(1512000 * Math.pow(1.1,mines));
    minesCost.innerText = nextMine;
    convertCurrency(balance);
  }
}

window.onload = function() {
  if (localStorage.getItem("saveData") !== null) {
    console.log("save data exists in local storage");
    savegame = JSON.parse(localStorage.getItem("saveData"));
    console.log("onload function. savegame = ", savegame);
    console.log("defining variables...")
    if (typeof savegame.balance !== "undefined") balance = savegame.balance;
    if (typeof savegame.employees !== "undefined") employees = savegame.employees;
    if (typeof savegame.shops !== "undefined") shops = savegame.shops;
    if (typeof savegame.ships !== "undefined") ships = savegame.ships;
    if (typeof savegame.mines !== "undefined") mines = savegame.mines;
    if (typeof savegame.nextEmployee !== "undefined") nextEmployee = savegame.nextEmployee;
    if (typeof savegame.nextShop !== "undefined") nextShop = savegame.nextShop;
    if (typeof savegame.nextShip !== "undefined") nextShip = savegame.nextShip;
    if (typeof savegame.nextMine !== "undefined") nextMine = savegame.nextMine;
    if (typeof savegame.empMult !== "undefined") empMult = savegame.empMult;
    if (typeof savegame.shopsMult !== "undefined") shopsMult = savegame.shopsMult;
    if (typeof savegame.fleetMult !== "undefined") fleetMult = savegame.fleetMult;
    if (typeof savegame.minesMult !== "undefined") minesMult = savegame.minesMult;
    //if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
    console.log("saved all variables. everything should be updated");
  } else {
    console.log("save data does not exist in local storage");
    return;
  }
}

//FOR LATER - initial definition for variables could use ternary operator instead of defining and then redefining

window.setInterval(function() {
  balance += empMult * employees;
  balanceText.innerText = Math.floor(balance);
  manageResearch();
  convertCurrency(balance);
}, 1000);

window.setInterval(function() {
  balance += shopsMult * shops;
  balanceText.innerText = Math.floor(balance);
}, 5000);

window.setInterval(function() {
  balance += fleetMult * ships;
  balanceText.innerText = Math.floor(balance);
}, 20000);

window.setInterval(function() {
  balance += minesMult * mines;
  balanceText.innerText = Math.floor(balance);
}, 60000)

function manageResearch() {
  for(let i=0; i < research.length; i++) {
    if (research[i].trigger() && (research[i].uses > 0)) {
      displayResearch(research[i]);
      research[i].uses -= 1;
      activeResearch.push(research[i]);
    }
  }
  //can add another for loop to change the formatting for ones you can afford
}

function displayResearch(project){
  project.element = document.createElement("button");
  project.element.setAttribute("id", project.id);
  
  project.element.onclick = function() {project.effect()};

  project.element.setAttribute("class", "research-button");
  researchList.appendChild(project.element);

  var span = document.createElement("span");
  span.style.fontWeight = "bold";
  project.element.appendChild(span);

  var title = document.createTextNode(project.title);
  span.appendChild(title);

  var cost = document.createTextNode(project.priceTag);
  project.element.appendChild(cost);

  var div = document.createElement("div");
  project.element.appendChild(div);

  var description = document.createTextNode(project.description);
  project.element.appendChild(description);
}

function save() {
  var saveData = {
    balance: balance,
    employees: employees,
    shops: shops,
    ships: ships,
    mines: mines,
    nextEmployee: nextEmployee,
    nextShop: nextShop,
    nextShip: nextShip,
    nextMine: nextMine,
    empMult: empMult,
    shopsMult: shopsMult,
    fleetMult: fleetMult,
    minesMult: minesMult,
    //prestige: prestige
  }
  localStorage.setItem("saveData",JSON.stringify(saveData));
  console.log(saveData);
}

function deleteSave() {
  localStorage.removeItem("saveData");
}

function convertCurrency(num) {
  altinlar.innerText = Math.floor(num / 360);
  yiralar.innerText = Math.floor(num % 360 / 30);
  kurler.innerText = Math.floor(num % 360 % 30);
}
