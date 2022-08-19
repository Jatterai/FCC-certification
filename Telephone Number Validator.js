function telephoneCheck(str) {
	const regexp = [
		/^(1 )?\d{3}([- ]?)\d{3}\2\d{4}$/,
		/^(1 ?)?\(\d{3}\) ?\d{3}[- ]\d{4}$/
	]
	return regexp.some(i => i.test(str));
}