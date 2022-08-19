const roman = {
	1000: 'M',
	500: 'D',
	100: 'C',
	50: 'L',
	10: 'X',
	5: 'V',
	1: 'I',
}

function convertToRoman(num) {
	return num.toString()
		.split('')
		.reverse()
		.map((n, i) => n * [1, 10, 100, 1000][i])
		.reverse()
		.map(i => convertWholes(i))
		.join('')
}

function convertWholes(subnum) {
	let decs = subnum > 1000 ? 1000 : subnum > 100 ? 100 : subnum > 10 ? 10 : 1;
	let middle = decs * 5;
	if (subnum > 3000) { return }
	return roman[subnum] ? roman[subnum] :
		subnum <= 3 * decs ? roman[decs].repeat(subnum / decs) :
			subnum === 4 * decs ? roman[decs] + roman[middle] :
				subnum > 5 * decs && subnum < decs * 9 ? roman[middle] + roman[decs].repeat((subnum - middle) / decs) : subnum === 9 * decs ? roman[decs] + roman[decs * 10] : 'error'

}