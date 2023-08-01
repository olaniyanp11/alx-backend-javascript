// import setFromArray from "./6-set";
export default function hasValuesFromArray(set, array) {
  let finalAnswer = true;
  array.map((elements) => {
    if (!set.has(elements)) {
      finalAnswer = false;
    }
  });
  return finalAnswer;
}
