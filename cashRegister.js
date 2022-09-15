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
    //console.log(cidSum)
    //console.log(cidSum % change)
    if (change > cidSum) {
        object = { status: "INSUFFICIENT_FUNDS", change: [] };
        //console.log(object)
        return object;
    }

    if (change == cidSum) {
        object = { status: "CLOSED", change: cid };
        //console.log(object)
        return object;
    }


    for (let counter = 8; counter >= 0; counter--) {
        console.log(counter);
        const cashValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

        console.log(change);


        if (cashValue[counter] <= change && cid[counter][1] > 0) {



            if (change - cid[counter][1] < 0) {
                let cashCounter = 0

                while (change.toFixed(2) >= cashValue[counter]) {
                    cashCounter += cashValue[counter]
                    change -= cashValue[counter]
                }

                change.toFixed(2);
                console.log(change);
                console.log(changeArr)
                changeArr.push([cid[counter][0], cashCounter])

            } else {
                changeArr.push([cid[counter][0], cid[counter][1]])
                change -= cid[counter][1]
            }
        }

        if (counter == 0 && change > 0) {
            return object = { status: "INSUFFICIENT_FUNDS", change: [] };
        }



    }
    object = { status: "OPEN", change: changeArr };
    console.log(object)
    return object


}
