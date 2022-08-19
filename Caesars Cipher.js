function rot13(str) {
	const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return str
		.split('')
		.map((char, i) => (abc.includes(char) ?
			(abc.indexOf(char) >= abc.length / 2) ? abc[abc.indexOf(char) - 13] : abc[abc.indexOf(char) + 13]
			: char))
		.join('')
}