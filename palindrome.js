function checkPalindrome(inputString) {
	let backArr = [];
	for (let i = inputString.length - 1; i >= 0; i--) {
		backArr.push(inputString.charAt(i));
	}
	let backString = backArr.join('');
	if (backString == inputString) {
		return true;
	} else {
		return false;
	}
}

// Alternate option

function checkPalindrome2(inputString) {
	return (
		inputString ==
		inputString
			.split('')
			.reverse()
			.join('')
	);
}

console.log(checkPalindrome('abba'));
console.log(checkPalindrome('test'));
