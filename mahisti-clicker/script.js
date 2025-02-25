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
const sell = document.getElementById("sell");
const hire = document.getElementById("hire");
const buyShop = document.getElementById("buy-shop");
const buyShip = document.getElementById("buy-ship");

var balance = 0;
var employees = 0;
var shops = 0;
var ships = 0;
var nextEmployee = 5;
var nextShop = 1000;
var nextShip = 100000;
var empMult = 1;
var shopsMult = 120;
var fleetMult = 15000;

sell.onclick = sellItem;
hire.onclick = hireEmployee;
buyShop.onclick = newShop;
buyShip.onclick = newShip;

function sellItem() {
  balance++;
  balanceText.innerText = balance;
  convertCurrency(balance);
}

function hireEmployee() {
  if (balance >= nextEmployee) {
    employees++;
    balance -= nextEmployee;
    balanceText.innerText = balance;
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
    balanceText.innerText = balance;
    shopsCount.innerText = shops;
    nextShop = Math.floor(1000 * Math.pow(1.1,shops));
    shopCost.innerText = nextShop;
    convertCurrency(balance);
  }
}

function newShip() {
  if (balance >= nextShip) {
    ships++;
    balance -= nextShip;
    balanceText.innerText = balance;
    fleetCount.innerText = ships;
    nextShip = Math.floor(100000 * Math.pow(1.1,ships));
    fleetCost.innerText = nextShip;
    convertCurrency(balance);
  }
}

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
}, 45000);

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

function convertCurrency(num) {
  altinlar.innerText = Math.floor(num / 360);
  yiralar.innerText = Math.floor(num % 360 / 30);
  kurler.innerText = Math.floor(num % 360 % 30);
}
