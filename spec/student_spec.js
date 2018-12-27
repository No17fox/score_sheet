'use strict';

let Student = require("../scr/student.js");

let student = new Student("张三", "20160101");

describe("Student", () => {
  it("should have attributes as name, id, average, and sum", () => {
    expect(student.name).toEqual("张三");
    expect(student.id).toEqual(20160101);
    expect(student.average).toEqual(0);
    expect(student.sum).toEqual(0);
  })
})