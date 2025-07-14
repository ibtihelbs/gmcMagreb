function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach(function (v) {
    if (max < v) {
      max = v;
    }
    if (min > v) {
      min = v;
    }
  });
  return [min, max];
}
function sumOfCubes(nums) {
  let sum = 0;
  nums.forEach(function (v) {
    sum += Math.pow(v, 3);
  });
  return sum;
}
function filterArray(arr) {
  const filtered = arr.filter(function (v) {
    return typeof v == "number";
  });
  return filtered;
}
function isSymmetrical(num) {
  const reverse = num.toString().split("").reverse().join("");

  return num == reverse;
}
function objectToArray(obj) {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  }
  return arr;
}
function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i < length + 1; i++) {
    arr.push(num * i);
  }
  return arr;
}
function squareDigits(n) {
  const arr = n.toString().split("");

  const squareArr = arr.map(function (v) {
    return v * v;
  });
  return Number(squareArr.join(""));
}
function marathonDistance(d) {
  let miles = 0;

  d.forEach(function (v) {
    miles += Math.abs(v);
  });
  if (miles == 25) {
    return true;
  } else {
    return false;
  }
}
