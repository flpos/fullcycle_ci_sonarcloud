const sum = require("./sum.js");

describe("sum functions", () => {
  it("sum two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})
