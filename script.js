// Part 1: Refactoring Old Code

// Attempt 1 - Wouldn't work because the typeof in the arrays is not the same data type
// const header = ["ID", "Name", "Occupation", "Age"];
// const row1 = ["42", "Bruce", "Knight", "41"];
// const row2 = ["57", "Bob", "Fry Cook", "19"];
// const row3 = ["63", "Blaine", "Quiz Master", "58"];
// const row4 = ["98", "Bill", "Doctor's Assistant", "26"];

// let lines = [];
// let cells = [" "];
// console.log(`${header}`);
// console.log(`${row1}`);

const ids = [42, 57, 63, 98];
const names = ["Bruce", "Bob", "Blaine", "Bill"];
const occupations = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"];
const ages = [41, 19, 58, 26];

console.log("ID" + " " + "Name" + " " + "Occupation" + " " + "Age");
for (let k = 0; k < id.length; k++) {
  console.log(ids[k] + " " + names[k] + " " + occupations[k] + " " + ages[k]);
}

// Part 2: Expanding Functionality

// for (const i = 0; i < 1000; i++) {
//   const row = [];
//   for (const j = 0; j < 1000; j++) {
//     row.push([j][i]);
//   }
//   data.addRow(row);
// }
