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

// Attempt 2 - works
const headers = ["ID", "Name", "Occupation", "Age"];
const ids = [42, 57, 63, 98];
const names = ["Bruce", "Bob", "Blaine", "Bill"];
const occupations = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"];
const ages = [41, 19, 58, 26];

// let cell = [" "];

console.log(`${headers[0]} ${headers[1]} ${headers[2]} ${headers[3]}`);

for (let k = 0; k < ids.length; k++) {
  console.log(ids[k] + " " + names[k] + " " + occupations[k] + " " + ages[k]);
}

// Attempt 3 - also works
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

// for (const i = 0; i < 1000; i++) {
//   const row = [];
//   for (const j = 0; j < 1000; j++) {
//     row.push([j][i]);
//   }
//   data.addRow(row);
// }

// // let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let cell = 1;
// // let row = 1
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] === ",") {
//     cell++;
//     continue;
//   }
//   if (csvStr[i] === "\n") {
//     cell = 1;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//     continue;
//   }
//   switch (cell) {
//     case 1:
//       cell1 += csvStr[i];
//       break;
//     case 2:
//       cell2 += csvStr[i];
//       break;
//     case 3:
//       cell3 += csvStr[i];
//       break;
//     case 4:
//       cell4 += csvStr[i];
//       break;
//   }
//   if ((cell === 4 && csvStr[i + 1] === "\n") || i + 1 === csvStr.length) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }
