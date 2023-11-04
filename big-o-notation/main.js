const nemo = ["nemo"];
const mezo = ["mezo"];

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("we found nemo");
    } else {
      console.log("we can't find nemo");
    }
  }
};

findNemo(nemo);
findNemo(mezo);
