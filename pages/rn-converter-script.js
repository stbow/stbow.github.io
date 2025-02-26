const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convert(num) {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const result = [];
  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  })
  output.innerText = result.join("");
  return;
};

function isValid(str, int) {
  if (!str || str.match(/[e.]/g)) {
    output.innerText = "Please enter a valid number"
  } else if (int < 1) {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (int >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    return true;
  }
  return false;
};

convertBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePage();
});

convertBtn.addEventListener("click", () => {
  updatePage();
});

function updatePage() {
  const inputStr = document.getElementById("number").value;
  const int = parseInt(inputStr);
  if (isValid(inputStr, int)) {
    convert(int);
  }
};
