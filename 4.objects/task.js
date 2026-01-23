"use strict";
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student("Alla", "female", 26);
const student2 = new Student("Viktor", "male", 24);
const student3 = new Student("Eve", "female", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (!Array.isArray(this.marks) || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
