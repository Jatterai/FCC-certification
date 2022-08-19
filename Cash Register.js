let coinToDollar = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	'ONE HUNDRED': 100,
}

function checkCashRegister(price, cash, cid) {

	const check = Object.values(Object.fromEntries(cid)).reduce((a, b) => +(a + b).toFixed(2));
	let changeVal = +(cash - price).toFixed(2);

	if (check < changeVal) return { status: "INSUFFICIENT_FUNDS", change: [] };
	if (check === changeVal) return { status: "CLOSED", change: cid }

	const forChange = Object.entries(coinToDollar)
		.sort((a, b) => ((changeVal / a[1] - 1) - (changeVal / b[1] - 1)))
		.filter(a => changeVal / a[1] - 1 >= 1);
	let change = [];

	for (let mon of forChange) {
		let monInDrawer = cid.find(i => i[0] === mon[0]);
		if (monInDrawer[1] === 0) continue;
		if (monInDrawer[1] <= changeVal) {
			changeVal -= monInDrawer[1];
			change.push([mon[0], monInDrawer[1]]);
			continue;
		};

		let takeFromCid = +(mon[1] * Math.floor(changeVal / mon[1])).toFixed(2);
		changeVal = +(changeVal - takeFromCid).toFixed(2)

		change.push([monInDrawer[0], takeFromCid]);

	}

	change = change.filter(i => i[1]);

	return changeVal ? { status: "INSUFFICIENT_FUNDS", change: [] } :
		{ 'status': 'OPEN', 'change': change }
}