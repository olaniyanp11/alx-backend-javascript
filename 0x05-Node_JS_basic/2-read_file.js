const fs = require("node:fs");

// let filePath = "./database.csv";
function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const splittedData = data.split("\n").filter((line) => line.trim() !== "");;
    length = splittedData.length;
    console.log(`Number of students: ${length - 1}`);
    fields = {};
    for (let i = 1; i < splittedData.length; i++) {
      std_data = splittedData[i].split(",");
      fields[std_data[std_data.length - 1]] = [];
    }
      console.log(fields);

    // for (let j = 0; j < fields.length - 1; j++) {
    // }
  } catch (error) {
    console.error("Cannot load the database");
  }
}

module.exports = countStudents;
