export const data = [
  {
    id: 1,
    title: "Binary array sorting",
    question:
      "Given a binary array, sort it using one traversal and no extra space.",
    input: "[1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0]",
    output: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]",
    code: `function sortBinaryArray(a, n) {\n  let j = -1;\n  for (let i = 0; i < n; i++) {\n    /* if number is smaller than 1\n     then swap it with j-th number*/\n    if (a[i] < 1) {\n      j++;\n      let temp = a[j];\n      a[j] = a[i];\n      a[i] = temp;\n    }\n  }\n}\n      \n// driver function\nlet a = [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0];\nlet n = a.length;\nsortBinaryArray(a, n);\nfor (let i = 0; i < n; i++)\n   document.write(a[i] + " ");\n`,
  },
  {
    id: 2,
    title: "Cash withdrawal from ATM machine",
    question:
      " Find minimum number of currency notes and values that sum to given amount",
    input: "800",
    output: "Currency Count-> 500 : 1, 200 : 1, 100 : 1",
    code: `function countCurrency(amount) {\n  let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];\n  let noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n\n  for (let i = 0; i < 9; i++) {\n   if (amount >= notes[i]) {\n   noteCounter[i] = Math.floor(amount / notes[i]);\n   amount = amount - noteCounter[i] * notes[i];\n    }\n  }\n  for (let i = 0; i < 9; i++) {\n    if (noteCounter[i] != 0) {\n   console.log(notes[i] + " : " + noteCounter[i]);\n    }\n  }\n}\n\n// Driver Code\nlet amount = 868;\ncountCurrency(amount);\n`,
  },
  {
    id: 3,
    title: "Anagrams",
    question: " Check whether two strings are anagram of each other",
    input: " s = 'anagram', t = nagaram'",
    output: "true",
    code: `function countCurrency(amount) {\n  let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];\n  let noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n\n  for (let i = 0; i < 9; i++) {\n   if (amount >= notes[i]) {\n   noteCounter[i] = Math.floor(amount / notes[i]);\n   amount = amount - noteCounter[i] * notes[i];\n    }\n  }\n  for (let i = 0; i < 9; i++) {\n    if (noteCounter[i] != 0) {\n   console.log(notes[i] + " : " + noteCounter[i]);\n    }\n  }\n}\n\n// Driver Code\nlet amount = 868;\ncountCurrency(amount);\n`,
  },
  {
    id: 4,
    title: "Function Currying",
    question: " Implement function currying to execute below function",
    input: " total(1)(2)(3)(4)(5) ",
    output: "15",
    code: `const sum = function (a) {\n  return function (b) {\n    if (b) {\n      return sum(a + b); // it takes an argument and return a function which again can take an argument.\n    }\n    return a; // it will keep on adding 1+2+3+4..\n  };\n};\n\nconsole.log(sum(1)(2)()); //3\nconsole.log(sum(1)(2)(3)(4)()); //10\n`,
  },
  {
    id: 5,
    title: "Minimum Number of Platforms Required for a Railway or Bus Station",
    question:
      "Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits. ",
    input:
      " arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00} dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00} ",
    output:
      "3 (There are at-most three trains at a time (time between 11:00 to 11:20))",
    code: `function max(a, b) {\n  if (a == b) return a;\n  else {\n    if (a > b) return a;\n    else return b;\n  }\n}\n// Returns minimum number of platforms reqquired\nfunction findPlatform(arr, dep, n) {\n  // plat_needed indicates number of platforms\n  // needed at a time\n  var plat_needed = 1,\n    result = 1;\n  var i = 1,\n    j = 0;\n  // run a nested loop to find overlap\n  for (var i = 0; i < n; i++) {\n    // minimum platform\n    plat_needed = 1;\n    for (var j = i + 1; j < n; j++) {\n      // check for overlap\n      if (\n        (arr[i] >= arr[j] && arr[i] <= dep[j]) ||\n        (arr[j] >= arr[i] && arr[j] <= dep[i])\n      )\n        plat_needed++;\n    }\n    // update result\n    result = max(result, plat_needed);\n  }\n  return result;\n}\n\nvar arr = [900, 940, 950, 1100, 1500, 1800];\nvar dep = [910, 1200, 1120, 1130, 1900, 2000];\nvar n = 6;\ndocument.write(\n  "Minimum Number of Platforms Required = " + findPlatform(arr, dep, n)\n);\n`,
  },
];
