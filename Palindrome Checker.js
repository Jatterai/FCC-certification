function palindrome(str) {
	const newStr = str
		.replace(/[\s-_\\\/\.,!\(\)]/g, '')
		.toLowerCase();

	const firstHalf = newStr.slice(0, newStr.length / 2);
	const lastHalf = newStr.
		slice(Math.ceil(newStr.length / 2))
		.split('').reverse().join('')

	return firstHalf === lastHalf;

}