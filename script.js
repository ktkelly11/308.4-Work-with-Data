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

for (let i = 0; i < headers.length; i++) {
  console.log(ids[i] + " " + names[i] + " " + occupations[i] + " " + ages[i]);
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

for (let i = 0; i < Headers.length; i++) {
  Headers[i] = IDs[i] + " " + Names[i] + " " + Occupations[i] + " " + Ages[i];
  console.log(Headers[i]);
}

console.log("=========================================");
// Part 2: Expanding Functionality

// Trying to make sense of it
// let infiniteColumns = [" "];
// let cells = "";
// lines = csvStr.split("\n");

// let newArray = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "57", "63", "98"],
//   ["Bruce", "Bob", "Blaine", "Bill"],
//   ["Knight", "Fry cook", "Quiz Master", "Doctor's Assistant"],
//   ["41", "19", "58", "26"],
// ];
// console.log(newArray[(0, 3)]);

// const header = ["ID", "Name", "Occupation", "Age"];
// const row1 = [42, "Bruce", "Knight", 41];
// const row2 = [57, "Bob", "Fry Cook", 19];
// const row3 = [63, "Blaine", "Quiz Master", 58];
// const row4 = [98, "Bill", "Doctor's Assistant", 26];

// Describe a variable that stores the number of columns in each row of data within the CSV
// const headerS = ["ID", "Name", "Occupation", "Age"];
// const rowOne = [42, "Bruce", "Knight", 41];
// const rowTwo = [57, "Bob", "Fry Cook", 19];
// const rowThree = [63, "Blaine", "Quiz Master", 58];
// const rowFour = [98, "Bill", "Doctor's Assistant", 26];

// const infiniteColumns = [headerS.length];

// const table = [headerS, rowOne, rowTwo, rowThree, rowFour];
// console.log(wholeTable);

// for (let m = 0; m < headerS.length; m++) {
//   if (headerS[m] === ",") {
//     infiniteColumns++;
//   }
//   if (headerS[m] === "\n") {
//     rowOne = "";
//     rowTwo = "";
//     rowThree = "";
//     rowFour = "";
//   }
// }

const csvStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

lines = [];
cells = [];

let infiniteColumns;

lines = csvStr.split("\n"); // split csv lines
cells = csvStr.split(","); // split into cells

infiniteColumns = cells.length;

newArray = [];

for (i = 0; i < lines.length; i++) {
  cells = lines[i].split(",");
  if (cells.length > infiniteColumns) {
    cells.length = infiniteColumns;
  }
  newArray.push(cells);
}

console.log(newArray);
console.log(`newArray: ${infiniteColumns}`); // returned newArray: 16

// Part 3: Transforming Data
let columnHeaders = newArray[0];

let objectArray = {};

// let object = {};
// object[newArray[0]] = newArray[1];
// console.log(object);

// let keys = Object.keys(obj);
// let val = Object.values(obj)
// // console.log(keys);
// let array = ["a", "b", "c", "d"];
// let o = {};
// o[array[0]] = array[1];
// console.log(o);
// {a: 'b'}

// stackoverflow example
// const result = {};
// for (let index = 0; index < array1.length; ++index) {
//   result[array1[index]] = array2[index];
// }

// newerArray[columnHeaders[0]] = newArray[1];
// console.log(newerArray);

// for (i = 1; i < newArray.length; i++) {
//   objectArray[i - 1];
//   for (h = 0; h < infiniteColumns; h++) {
//     objectArray[i - 1][columnHeaders[h]] = newArray[i][h];
//   }
// }

// console.log(objectArray); //is returning undefined
