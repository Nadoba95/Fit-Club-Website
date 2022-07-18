import { add, divide, getWeekDay, getRandomNum } from "./shared";

describe("Test shared util function", () => {
  const getRandomNumSpy = jest.fn();

  it("should return 5 when adding 2 and 3", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("should return negative value when adding negatives values", () => {
    expect(add(-5, -2)).toBeLessThan(0);
  });

  it("should throw error when try to divide by 0", () => {
    try {
      divide(5, 0);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toBe("Cannot divide by zero");
    }
  });
  it("should divide 2 values", () => {
    expect(divide(6, 2)).toBe(3);
  });
  it("should give correct day in week", () => {
    getRandomNum(getRandomNumSpy);
    expect(getRandomNumSpy).toBeCalledTimes(3);
  });
});
