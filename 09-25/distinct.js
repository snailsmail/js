
let arr1 = Array.from(new Array(100000), function (x, index) {
  return index;
});

let arr2 = Array.from(new Array(50000), function (x, index) {
  return index + index;
});

let startTime = new Date().getTime();



let endTime = new Date().getTime();