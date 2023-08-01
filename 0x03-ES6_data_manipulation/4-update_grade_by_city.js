import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(
  listOfStudents,
  city,
  newGrades,
) {
  const newList = getStudentsByLocation(listOfStudents, city);
  const updatedList = newList.map((student) => {
    const students = { ...student };
    for (let index = 0; index < newGrades.length; index += 1) {
      if (students.id === newGrades[index].studentId) {
        if (newGrades[index].grade) {
          students.grade = newGrades[index].grade;
        } else {
          students.grade = 'N/A';
        }
      }
    }
    return students;
  });
  return updatedList;
}
