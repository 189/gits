import Hi from "../src/gits";

/**
 * Dummy test
 */
describe("Test Hi", () => {
  it("works if input equal to output", () => {
    const params = {};
    expect(Hi(params)).toBe(params);
  });
});
