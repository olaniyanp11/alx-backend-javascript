export default function getStudentIdsSum(array) {
  // old is the numberalready adde
  // new is the current number on iteration and 0
  // is the initial value for the addition
  return array.reduce((sum, current) => sum + current.id, 0);
}
