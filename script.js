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

const id = [42, 57, 63, 98];
const called = ["Bruce", "Bob", "Blaine", "Bill"];
const occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"];
const age = [41, 19, 58, 26];

console.log("ID" + " " + "Name" + " " + "Occupation" + " " + "Age");
for (let k = 0; k < id.length; k++) {
  console.log(id[k] + " " + called[k] + " " + occupation[k] + " " + age[k]);
}

// Part 2: Expanding Functionality
