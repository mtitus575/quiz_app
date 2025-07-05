const questionBankJS = [
  {
    question:
      "What is the difference between `undefined` and `null` in JavaScript?",
    options: [
      "`undefined` is an object, `null` is a type",
      "`undefined` means a variable was declared but not assigned; `null` is an assigned empty value",
      "They are interchangeable",
      "`null` means not declared; `undefined` is explicitly assigned",
    ],
    answer:
      "`undefined` means a variable was declared but not assigned; `null` is an assigned empty value",
  },
  {
    question: "How can you check the data type of a variable in JavaScript?",
    options: ["typeof()", "checkType()", "dataType()", "typeof"],
    answer: "typeof",
  },
  {
    question:
      "What will be the output of the following code?\nconsole.log(typeof NaN);",
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    answer: '"number"',
  },
  {
    question: "Which of the following are primitive types in JavaScript?",
    options: ["Object", "String", "Boolean", "b and c"],
    answer: "b and c",
  },
  {
    question: "How do you add an element to the end of an array?",
    options: [
      "array.push(element)",
      "array.add(element)",
      "array.unshift(element)",
      "array.insertLast(element)",
    ],
    answer: "array.push(element)",
  },
  {
    question:
      "What will the following code output?\nlet arr = [1, 2, 3];\narr.length = 5;\nconsole.log(arr);",
    options: [
      "[1, 2, 3, undefined, undefined]",
      "[1, 2, 3, , ]",
      "[1, 2, 3]",
      "Error",
    ],
    answer: "[1, 2, 3, undefined, undefined]",
  },
  {
    question: "How can you remove the first element of an array and return it?",
    options: ["pop()", "shift()", "removeFirst()", "splice(0, 1)"],
    answer: "shift()",
  },
  {
    question: "Which method would you use to merge two arrays?",
    options: ["merge()", "concat()", "combine()", "append()"],
    answer: "concat()",
  },
  {
    question: "How do you access a property of an object using a variable key?",
    options: [
      "obj.variable",
      "obj->variable",
      "obj[variable]",
      "obj.(variable)",
    ],
    answer: "obj[variable]",
  },
  {
    question:
      'What will the following code print?\nconst person = { name: "Alice" };\nconsole.log("age" in person);',
    options: ["true", '"age"', "false", "undefined"],
    answer: "false",
  },
  {
    question: "How can you loop through all properties of an object?",
    options: [
      "for (let i in object)",
      "for (let i = 0; i < object.length; i++)",
      "object.foreach()",
      "for (key of object)",
    ],
    answer: "for (let i in object)",
  },
  {
    question:
      "Write a code snippet to clone an object using the spread operator.",
    options: [
      "let clone = {...obj};",
      "let clone = obj.clone();",
      "let clone = Object.copy(obj);",
      "let clone = obj[];",
    ],
    answer: "let clone = {...obj};",
  },
  {
    question:
      "What is the difference between a function declaration and a function expression?",
    options: [
      "Declarations are anonymous",
      "Expressions are hoisted",
      "Declarations are hoisted, expressions are not",
      "No difference",
    ],
    answer: "Declarations are hoisted, expressions are not",
  },
  {
    question:
      'What will be the output?\nconsole.log(myFunc());\nfunction myFunc() {\n  return "Hello";\n}',
    options: ['"Hello"', "undefined", "ReferenceError", "null"],
    answer: '"Hello"',
  },
  {
    question:
      "What are arrow functions and how do they differ from regular functions in terms of `this` binding?",
    options: [
      "Arrow functions bind `this` to the caller",
      "Arrow functions have their own `this`",
      "Arrow functions do not have their own `this`",
      "Arrow functions are slower",
    ],
    answer: "Arrow functions do not have their own `this`",
  },
  {
    question: "How do you select an element by ID in the DOM using JavaScript?",
    options: [
      'getElementByClass("id")',
      'getElementByTag("id")',
      'document.getElementById("id")',
      'document.getId("id")',
    ],
    answer: 'document.getElementById("id")',
  },
  {
    question:
      "Write a script to change the text content of a paragraph with ID `intro`.",
    options: [
      'document.querySelector("#intro").text = "New";',
      'getElementById("intro").html = "New";',
      'document.getElementById("intro").textContent = "New";',
      'document.getElement("intro").innerHTML = "New";',
    ],
    answer: 'document.getElementById("intro").textContent = "New";',
  },
  {
    question: "What does `document.createElement()` do?",
    options: [
      "Creates a new attribute",
      "Selects an element",
      "Removes an element",
      "Creates a new DOM element",
    ],
    answer: "Creates a new DOM element",
  },
  {
    question: "What is the difference between `for...in` and `for...of` loops?",
    options: [
      "`for...in` is for arrays, `for...of` is for objects",
      "`for...in` loops over values, `for...of` over keys",
      "`for...in` loops over keys, `for...of` over values",
      "Both loop the same way",
    ],
    answer: "`for...in` loops over keys, `for...of` over values",
  },
  {
    question:
      "What will this code output and why?\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
    options: ["0 1 2", "3 3 3", "undefined", "0 1 2 3"],
    answer: "3 3 3",
  },
];

export default questionBankJS;
