function checkCashRegister(price, cash, cid) {
    let object = {};
    let change = cash - price;
    var changeArr = [];


    let cidSumFunc = () => {
        let sum = 0;
        for (let i = 0; i < cid.length; i++) {
            sum += cid[i][1];
        }
        return sum.toFixed(2);
    }
    let cidSum = cidSumFunc()
    console.log(change)
    for (let counter = 8; counter >= 0; counter--) {
        const cashValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

        if (change > 0 && cashValue[counter] <= change
            //&& change % cashValue[counter]
            //&& cid[counter][1] >= change) 
        ){
            changeArr.push([cid[counter][0],
            change / cashValue[counter] * cashValue[counter]]);
            change -= change / cashValue[counter] * cashValue[counter];
        }
    }











    if (change > cidSum) {
        object = { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    console.log(changeArr)
    console.log(change)
    console.log(cidSum)
    console.log(object)
    return change;
}


checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);