const divide = (arr, n) => {
  let result = [];
  let subarray = [];
  let currentSum = 0;
  
  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(subarray);
      subarray = [];
      currentSum = 0;
    }
	  //
    
    subarray.push(num);
    currentSum += num;
  }
  
  if (subarray.length > 0) {
    result.push(subarray);
  }
  
  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));