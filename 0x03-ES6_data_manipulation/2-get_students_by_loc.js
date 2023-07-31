export default function getListStudentIds(array, query) {
  if (Array.isArray(array)) {
    return array.filter((obj) => obj.location === query);
  }
  return [];
}
