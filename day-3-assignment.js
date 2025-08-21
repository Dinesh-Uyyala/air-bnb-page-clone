const students = [
  { rollNo: 1, name: "Alice", marks: 92 },
  { rollNo: 2, name: "Bob", marks: 85 },
  { rollNo: 3, name: "Charlie", marks: 78 },
  { rollNo: 4, name: "David", marks: 49 },
  { rollNo: 5, name: "Eva", marks: 65 },
  { rollNo: 6, name: "Frank", marks: 88 },
  { rollNo: 7, name: "Grace", marks: 73 },
  { rollNo: 8, name: "Henry", marks: 95 },
  { rollNo: 9, name: "Isla", marks: 58 },
  { rollNo: 10, name: "Jack", marks: 77 },
  { rollNo: 11, name: "Karen", marks: 69 },
  { rollNo: 12, name: "Liam", marks: 34 },
  { rollNo: 13, name: "Mia", marks: 82 },
  { rollNo: 14, name: "Noah", marks: 91 },
  { rollNo: 15, name: "Olivia", marks: 47 },
  { rollNo: 16, name: "Paul", marks: 59 },
  { rollNo: 17, name: "Quinn", marks: 80 },
  { rollNo: 18, name: "Rose", marks: 74 },
  { rollNo: 19, name: "Steve", marks: 100 },
  { rollNo: 20, name: "Tina", marks: 62 }
];

const totalStudents = students.length;

if (totalStudents === 0) {
  console.log("No students found. Please add data first!");
} else {
  const randomIndex = Math.floor(Math.random() * totalStudents);
  const student = students[randomIndex];

  let grade;
  if (student.marks >= 90) {
    grade = 'A';
  } else if (student.marks >= 75) {
    grade = 'B';
  } else if (student.marks >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  console.log(`🎓 Student: ${student.name} (Roll No: ${student.rollNo})`);
  console.log(`Marks: ${student.marks} → Grade: ${grade}`);
}
