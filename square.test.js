const { square } = require("./square");

test("square should square a number", function () {
  const res = square(3);
  expect(res).toEqual(9);
});

test("square should square negative numbers", function () {
  const num = square(-9);
  expect(num).toEqual(81);
});
