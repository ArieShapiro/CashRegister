"use strict";

console.log("Hello Cash Register");

function checkCashRegister(price, cash, cid) {
  var ownedAmount = 0;
  cid.forEach(element => {
    ownedAmount += element[1];
  });
  if (price > ownedAmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (price === ownedAmount) {
    return {
      status: "CLOSED",
      change: cid
    };
  } else {
    //change calculation
    cid.forEach(element => {
      if (element[1] > cash - price) {
        var change = [];
        change.push();
      }
    });

    return {
      status: "OPEN",
      change: []
    };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);

// switch (element[0]) {
//   case "PENNY":
//     ownedAmount += "Off";
//     break;
//   case "NICKEL":
//     text = "On";
//     break;
//   case "DIME":
//     text = "Off";
//     break;
//   case "QUARTER":
//     text = "On";
//     break;
//   case "ONE":
//     text = "Off";
//     break;
//   case "FIVE":
//     text = "On";
//     break;
//   case "TEN":
//     text = "On";
//     break;
//   case "TWENTY":
//     text = "Off";
//     break;
//   case "ONE HUNDRED":
//     text = "On";
//     break;
// }
