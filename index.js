// run `node index.js` in the terminal


function sortStudents(students) {
  students.sort((a, b) => {
    // Rule 1: Sort by total marks
    const totalMarksDiff = getTotalMarks(b) - getTotalMarks(a);
    if (totalMarksDiff !== 0) {
      return totalMarksDiff;
    }

    // Rule 2: Sort by biology marks
    const biologyMarksDiff = b.biology - a.biology;
    if (biologyMarksDiff !== 0) {
      return biologyMarksDiff;
    }

    // Rule 3: Sort by date of birth
    const dateOfBirthDiff = new Date(a.dob) - new Date(b.dob);
    return dateOfBirthDiff;
  });

  return students;
}

function getTotalMarks(student) {
  return student.biology + student.chemistry;
}

// Test Case 1
let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase1));

// Test Case 2
let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase2));
