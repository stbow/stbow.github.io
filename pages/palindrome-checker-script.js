const entry = document.getElementById('text-input');
const check = document.getElementById('check-btn');
const answer = document.getElementById('result');

function isPalindrome(input) {
  let lowerString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  console.log(lowerString); 
  return lowerString === [...lowerString].reverse().join('');
};

function checkPalindrome (input) {
  if (input === '') {
      alert("Please input a value");
      return;
  };
  
  answer.innerHTML = `${input} ${isPalindrome(input) ? "is" : "is not"} a palindrome`;
  console.log(answer.innerHTML);
  
}; 

check.addEventListener('click', () => {
  checkPalindrome(entry.value);
  entry.value = '';
});
