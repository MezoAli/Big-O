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

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const printFirst2Boxes = (boxes) => {
  console.log(boxes[0]);
  console.log(boxes[1]);
};

printFirst2Boxes(boxes); // o(1) => const time
