export default function concatArrays(array1, array2, string) {
 let ans = [...array1, ...array2, ...string];
 
 return ans;
}
