const Employee = require("../lib/Employee");


test("Name Test", () => {
  const name = "NameTest";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("ID Test", () => {
  const testValue = 2021;
  const e = new Employee("Name", testValue);
  expect(e.id).toBe(testValue);
});

test("Email Test", () => {
  const testValue = "test@test.com";
  const e = new Employee("Name", 2021, testValue);
  expect(e.email).toBe(testValue);
});


test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Name", 2021, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
