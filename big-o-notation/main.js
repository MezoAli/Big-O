// const nemo = ["nemo"];
// const mezo = ["mezo"];
// const largeArray = new Array(10000).fill("nemo");

// const findNemo = (array) => {
//   const t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("we found nemo");
//     } else {
//       console.log("we can't find nemo");
//     }
//   }
//   const t1 = performance.now();
//   console.log(`the function took ${t1 - t0} ms to find nemo`);
// };

// findNemo(largeArray); // o(n) => linear time

// const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const printFirst2Boxes = (boxes) => {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// };

// printFirst2Boxes(boxes); // o(1) => const time

// FIRST CHALLANGE
// const anotherFunction = () => {};

// const funChallenge = (inputs) => {
//   let a = 10; // o(1)
//   a = 50 + 3; // o(1)

//   for (let i = 0; i < inputs.length; i++) {
//     //o(n)
//     anotherFunction(); //o(n)
//     let stranger = true; //o(n)
//     a++; //o(n)
//   }
//   return a; //o(1)
// };

// console.log(funChallenge([1, 2, 3, 4, 5, 6])); // o(3 + 4n) => o(n)
// console.log(funChallenge([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // o(3 + 4n) => o(n)

// log all pairs together

const array = [1, 2, 3, 4, 5, 6];
let total = 0;

const logPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
      total++;
    }
  }
};

logPairs(array);
console.log(`the function run ${total} times`);
