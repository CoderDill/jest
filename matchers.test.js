describe("test matchers", function () {
  let nums;

  beforeEach(function () {
    nums = [2, 3, 4];
  });

  afterEach(function () {
    console.log("After Each Test");
  });

  beforeAll(function () {
    console.log("Before All");
  });

  afterAll(function () {
    console.log("After All");
  });

  test("compare toBe and toEqual", function () {
    const copy = [...nums];
    const nums2 = nums;

    expect(copy).toEqual(nums);
    // expect(copy).toBe(nums) not same reference
    expect(nums2).toBe(nums);
  });

  test("playing with toContain", function () {
    const colors = ["red", "green"];

    expect(colors).toContain("red");
    expect("hello").toContain("hell");
  });

  test("toBeGreaterThan", function () {
    expect(4).toBeGreaterThan(2);
  });

  test("any", function () {
    const randNum = Math.random() * 3;
    expect(randNum).toEqual(expect.any(Number));
    expect("crappydill").toEqual(expect.any(String));
  });

  test("not", function () {
    const numLives = 9;
    expect(2).not.toEqual(3);
    expect(numLives).not.toEqual(0);
    expect(numLives).not.toEqual(expect.any(String));
  });
});
