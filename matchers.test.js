describe("test matchers", function () {
  test("compare toBe and toEqual", function () {
    const nums = [2, 3, 4];
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
