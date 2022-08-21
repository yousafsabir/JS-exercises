function checkCashRegister(price, cash, cid) {
    // change in pennies
    let changeDue = (cash - price) * 100;

    // cash in drawer in pennies
    let cashInDrawer = 0;
    for (let element of cid) {
        cashInDrawer += element[1] * 100;
    }

    if (changeDue > cashInDrawer) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (changeDue === cashInDrawer) {
        return { status: "CLOSED", change: cid };
    }
    cid = cid.reverse();
    for (let element of cid) {
        element[1] = element[1] * 100;
    }
    let units = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1,
    };
    let changeArr = [];
    for (let element of cid) {
        let holder = [element[0], 0];
        while (changeDue >= units[element[0]] && element[1] > 0) {
            changeDue -= units[element[0]];
            element[1] -= units[element[0]];
            holder[1] += units[element[0]] / 100;
        }
        if (holder[1] > 0) changeArr.push(holder);
    }
    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArr };
}
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);
