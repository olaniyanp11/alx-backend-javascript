export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    this.__name = name;
    this.__length = length;
    this.__students = students;
  }

  get name() {
    return this.__name;
  }

  set name(value) {
    this.__name = value;
  }

  get length() {
    return this.__length;
  }

  set length(value) {
    this.__length = value;
  }

  get students() {
    return this.__students;
  }

  set students(value) {
    this.__students = value;
  }
}
