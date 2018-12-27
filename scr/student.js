class Student {
  constructor(name, id) {
    this.name = name;
    this.id = Number(id);
    this.average = 0;
    this.sum = 0;
  }
}

module.exports = Student;