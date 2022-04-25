const word = document.getElementById("word");
const btn = document.getElementById("btnChecker");
const answerCtn = document.querySelector(".checker__answer");
const answer = document.createElement("p");
answer.classList.add("answer");
const fragment = document.createDocumentFragment();

word.addEventListener("keyup", () => {
  if (word.value) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "disabled");
    answer.innerHTML = "";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const isPalindrome = palindrome(word.value);

  isPalindrome
    ? (answer.innerHTML = `Yes, <strong>'${word.value}'</strong> is a palindrome!`)
    : (answer.innerHTML = `No, <strong>'${word.value}'</strong> is not a palindrome`);

  fragment.appendChild(answer);
  answerCtn.appendChild(fragment);
});

function supTildes(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function palindrome(str) {
  str = supTildes(str);
  const regex = /[^a-zA-Z0-9]/;
  let newStr = str.split(regex).join("").toLowerCase();
  console.log(newStr);
  let reverseStr = newStr.split("").reverse().join("").toLowerCase();

  return reverseStr == newStr;
}
