export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const newArray = array.map((obj) => obj.id);
    return newArray;
  }
  return [];
}
