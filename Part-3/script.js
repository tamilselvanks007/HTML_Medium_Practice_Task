//Fix the code to get the largest of three
let f, s, t;
aa = (f, s, t) => {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

//Fix the code to gen Title caps
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substring(1));
  }
};
ano();

//Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const sum1 = num.reduce(sum);
console.log(sum1);

//Fix the code to gen Title caps
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
  for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})();

//Fix the code to reverse
(function (str) {
  str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

//Sum of odd numbers in an array
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s1 = as.reduce(function (a, c) {
  if (c % 2 !== 0) {
    return a + c;
  }
  return a;
});
console.log(s1);

//Swap the odd and even digits
aa = (data) => {
  var a = data;
  for (i = 0; i < a.length - 1; i++) {
    var l = "";
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;
    if (a.length % 2 !== 0) {
      l += a[a.length - 1];
    }
    console.log(l);
  }
};
aa("1234");
