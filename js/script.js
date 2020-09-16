let getBudget = document.getElementById("budget");
let getExpenses = document.getElementById("expenses");
let screen = document.querySelectorAll(".screen span");
let input = document.querySelectorAll("input");
let displayExpenseTitle = document.getElementById("display-expense-title");
let displayExpenseValue = document.getElementById("display-expense-value");
let icons = document.getElementById("icons");
let error = document.querySelectorAll(".error");
let edit = document.getElementsByClassName("fa-check-square");

let budgetamount = input[0].value;
let expenseTitle = input[1].value;
let expenseValue = input[2].value;
let balance;
let sumTotal = 0;
let totalExpensis = [];

getBudget.addEventListener("click", (e) => {
  e.preventDefault();
  budgetamount = input[0].value;
  balance = budgetamount - sumTotal;
  if (budgetamount === "" || budgetamount < 0) {
    error[0].style.display = "block";
    setTimeout(() => {
      error[0].style.display = "none";
    }, 3000);
  } else {
    screen[0].innerHTML = `<span class="text-green"><i class="fas fa-dollar-sign"></i> ${budgetamount}</span>`;
    screen[1].innerHTML = `<span class="text-green"><i class="fas fa-dollar-sign"></i> ${sumTotal}</span>`;
    if (budgetamount < 0) {
      screen[2].innerHTML = `<span class="text-red"><i class="fas fa-dollar-sign"></i> ${balance}</span>`;
    } else {
      screen[2].innerHTML = `<span class="text-green"><i class="fas fa-dollar-sign"></i> ${balance}</span>`;
    }
  }
  input[0].value = "";
});

function lets() {
  expenseValue = parseInt(expenseValue);

  totalExpensis.push(expenseValue);

  sumTotal = totalExpensis.reduce(function (a, b) {
    return a + b;
  }, 0);

  balance = budgetamount - sumTotal;

  screen[1].innerHTML = `<span class="text-red"><i class="fas fa-dollar-sign"></i>${sumTotal}</span>`;
  if (balance < 0) {
    screen[2].innerHTML = `<span class="text-red"><i class="fas fa-dollar-sign"></i> ${balance}</span>`;
  } else {
    screen[2].innerHTML = `<span class="text-green"><i class="fas fa-dollar-sign"></i> ${balance}</span>`;
  }

  //   screen[2].innerHTML = screen[1].innerHTML = `<span class="text-red"><i class="fas fa-dollar-sign"></i> ${expenseValue}</span>`;
  displayExpenseTitle.innerHTML += `<p class="text-red text-capitalize">- <span>${expenseTitle}</span></p>`;
  displayExpenseValue.innerHTML += `<p class="text-red">${expenseValue}</p>`;
  //   icons.innerHTML += `            <div>
  //     <i id="yea" class="far fa-check-square text-blue"></i>
  //     <i class="fas fa-trash text-red"></i>
  //   </div>`;
  let div = document.createElement("div");
  let checkbox = document.createElement("input");
  let iTwo = document.createElement("i");

  checkbox.setAttribute("type", "checkbox");
  iTwo.setAttribute("class", "fas fa-trash");
  div.setAttribute("class", "div");

  icons.append(div);
  div.append(checkbox);
  div.append(iTwo);

  input[1].value = "";
  input[2].value = "";
  console.log(totalExpensis);
}

getExpenses.addEventListener("click", (e) => {
  e.preventDefault();
  expenseTitle = input[1].value;
  expenseValue = input[2].value;

  if (expenseValue === "") {
    error[1].style.display = "block";
    setTimeout(() => {
      error[1].style.display = "none";
    }, 3000);
  } else {
    lets(); 
  }
});
