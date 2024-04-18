// Part 1: Refactoring Old Code

// Attempt 1 // Rodney pointed out that I could have different data types in an array
const header = ["ID", "Name", "Occupation", "Age"];
const row1 = [42, "Bruce", "Knight", 41];
const row2 = [57, "Bob", "Fry Cook", 19];
const row3 = [63, "Blaine", "Quiz Master", 58];
const row4 = [98, "Bill", "Doctor's Assistant", 26];

// let lines = [];
// let cells = [" "];
// console.log(`${header}`);
// console.log(`${row1}`);

const wholeTable = [header, row1, row2, row3, row4];
console.log(wholeTable); // works in an array

// Attempt 2
const headers = ["ID", "Name", "Occupation", "Age"];
const ids = [42, 57, 63, 98];
const names = ["Bruce", "Bob", "Blaine", "Bill"];
const occupations = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"];
const ages = [41, 19, 58, 26];

// let cell = [" "];

console.log(`${headers[0]} ${headers[1]} ${headers[2]} ${headers[3]}`);

for (let k = 0; k < headers.length; k++) {
  console.log(ids[k] + " " + names[k] + " " + occupations[k] + " " + ages[k]);
}

// Attempt 3
const Headers = ["ID", "Name", "Occupation", "Age"];
const IDs = ["42", "57", "63", "98"];
const Names = ["Bruce", "Bob", "Blaine", "Bill"];
const Occupations = ["Knight", "Fry cook", "Quiz Master", "Doctor's Assistant"];
const Ages = ["41", "19", "58", "26"];

// let cell = [" "];

// console.log(`${Headers[(0, 1, 2, 3)]}`); // Only console.logs Age?
console.log(`${Headers[0]} ${Headers[1]} ${Headers[2]} ${Headers[3]}`);

// for (let j = 0; j < Headers.length; j++) {
//   let Headers = IDs[j] + " " + Names[j] + " " + Occupations[j] + " " + Ages[j];
//   console.log(Headers[j]);
// } // did not work

for (let j = 0; j < Headers.length; j++) {
  Headers[j] = IDs[j] + " " + Names[j] + " " + Occupations[j] + " " + Ages[j];
  console.log(Headers[j]);
}

// Part 2: Expanding Functionality
const csvStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let infiniteColumns = [" "];
let cells = "";
lines = csvStr.split("\n");

let newArray = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "57", "63", "98"],
  ["Bruce", "Bob", "Blaine", "Bill"],
  ["Knight", "Fry cook", "Quiz Master", "Doctor's Assistant"],
  ["41", "19", "58", "26"],
];
console.log(newArray[(0, 3)]);

// Part 3: Transforming Data
