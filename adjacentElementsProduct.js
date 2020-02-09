// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// Input:  inputArray = [3, 6, -2, -5, 7, 3]
// Expected output: 21

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

function adjacentElementsProduct(inputArray) {
	let currentProduct = -1000;
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] * inputArray[i + 1] > currentProduct) {
			currentProduct = inputArray[i] * inputArray[i + 1];
		}
	}
	return currentProduct;
}

let testArray = [1, 0, 1, 0, 1000];
console.log(adjacentElementsProduct(testArray));

// Aternate solution

function adjacentElementsProduct2(arr) {
	return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}
