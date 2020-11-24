/*
For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array.

Example
  sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"
Explanation
The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"
*/

const sumOrProduct = (array, n) => {
  let sorted = array.sort(function(a, b) {
    return a - b;
  });
  let largest = [];
  let smallest = [];
  let sum;
  let product;
  for(let i = 0; i < sorted.length; i++) {
    if(i > -1 && i < n) {
      smallest.push(sorted[i]);
    }
    if(i > sorted.length - n - 1) {
      largest.push(sorted[i]);
    }
  }
  for(let i = 0; i < largest.length; i++) {
    if(i === 0) {
      sum = largest[i];
    } else {
      sum += largest[i];
    }
  }
  for(let i = 0; i < smallest.length; i++) {
    if(i === 0) {
      product = smallest[i];
    } else {
      product = product * smallest[i];
    }
  }

  if(product > sum) {
    return 'product';
  } else if(sum > product) {
    return 'sum';
  } else {
    return 'same';
  }

}