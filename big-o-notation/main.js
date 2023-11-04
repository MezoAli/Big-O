const nemo = ["nemo"];
const mezo = ["mezo"];

const findNemo = (array) => {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("we found nemo");
    } else {
      console.log("we can't find nemo");
    }
  }
  const t1 = performance.now();
  console.log(`the function took ${t1 - t0} ms to find nemo`);
};

findNemo(nemo);
