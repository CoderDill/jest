describe("test matchers", function () {
  test("compare toBe and toEqual", function () {
    const nums = [2, 3, 4];
    const copy = [...nums];
    const nums2 = nums;
    expect(copy).toEqual(nums);
    // expect(copy).toBe(nums) not same reference
    expect(nums2).toBe(nums);
  });
});
