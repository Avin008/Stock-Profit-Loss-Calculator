const intialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const StockQuantity = document.querySelector("#stock-quantity");
const outputBox = document.querySelector("#output-box");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", function () {
  checkInput(intialPrice, currentPrice, StockQuantity);
});

function calculateProfitAndLoss(intialPrice, currentPrice, StockQuantity) {
  let cost = Number(intialPrice.value);
  let selling = Number(currentPrice.value);
  let StockQty = Number(StockQuantity.value);

  if (cost < selling) {
    //profit
    let profit = selling - cost;
    let profitPercentage = (profit / cost) * 100;
    outputBox.innerText = `Your Profit is Rs. ${
      profit * StockQty
    } and profit Percentage is ${profitPercentage.toFixed(2)} %`;
  } else if (cost > selling) {
    //loss
    let loss = cost - selling;
    let lossPercentage = (loss / cost) * 100;
    outputBox.innerText = `Your loss is Rs. ${
      loss * StockQty
    }  and loss Percentage is ${lossPercentage.toFixed(2)}% `;
  } else {
    outputBox.innerText = "no pain no gain, no gain no pain";
  }
}

function checkInput(inputOne, inputTwo, inputThree) {
  if (inputOne.value && inputTwo.value && inputThree.value) {
    if (
      (Number(inputOne.value) &&
        Number(inputTwo.value) &&
        Number(inputThree.value)) == 0
    ) {
      outputBox.innerText = "values cannot be zero";
    } else {
      calculateProfitAndLoss(intialPrice, currentPrice, StockQuantity);
    }
  } else {
    outputBox.innerText = "input fields cannot be empty";
  }
}
