const calculator = require("./calculator");
let Calculator = new calculator({
  fractLimit: 5,
});

describe("Test addition", () => {
  test("Addition 1 and 1", () => {
    expect(Calculator.addition(1, 1)).toBe(2);
  });

  test("Addition 10 and -1", () => {
    expect(Calculator.addition(10, -1)).toBe(9);
  });

  test("Addition 10 and 1", () => {
    expect(Calculator.addition(10, 1)).toBe(11);
  });

  test("Addition -10 and -1", () => {
    expect(Calculator.addition(-10, -1)).toBe(-11);
  });

  test("Addition 0.1 and 0.2", () => {
    expect(Calculator.addition(0.1, 0.2)).toBe(0.3);
  });

  test("Addition 0.1 and 0.2 with reached limits of fraction places", () => {
    expect(Calculator.addition(0.100001111, 0.2000011111)).toBe(0.3);
  });

  test("Invalid a parameter", () => {
    expect.assertions(2);
    try {
      Calculator.addition("1", 1);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of a parameter");
    }
  });

  test("Invalid b parameter", () => {
    expect.assertions(2);
    try {
      Calculator.addition(1, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of b parameter");
    }
  });
});

describe("Test subtraction", () => {
  test("Subtraction 1 and 1", () => {
    expect(Calculator.subtraction(1, 1)).toBe(0);
  });

  test("Subtraction 10 and -1", () => {
    expect(Calculator.subtraction(10, -1)).toBe(11);
  });

  test("Subtraction 10 and 1", () => {
    expect(Calculator.subtraction(10, 1)).toBe(9);
  });

  test("Subtraction -10 and -1", () => {
    expect(Calculator.subtraction(-10, -1)).toBe(-9);
  });

  test("Subtraction 0.1 and 0.2", () => {
    expect(Calculator.subtraction(0.1, 0.2)).toBe(-0.1);
  });

  test("Subtraction 0.1 and 0.2 with reached limits of fraction places", () => {
    expect(Calculator.subtraction(0.100001111, 0.2000011111)).toBe(-0.1);
  });

  test("Invalid a parameter", () => {
    expect.assertions(2);
    try {
      Calculator.subtraction("1", 1);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of a parameter");
    }
  });

  test("Invalid b parameter", () => {
    expect.assertions(2);
    try {
      Calculator.subtraction(1, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of b parameter");
    }
  });
});

describe("Test division", () => {
  test("1 and 1", () => {
    expect(Calculator.division(1, 1)).toBe(1);
  });

  test("10 and -1", () => {
    expect(Calculator.division(10, -1)).toBe(-10);
  });

  test("10 and 1", () => {
    expect(Calculator.division(10, 1)).toBe(10);
  });

  test("-10 and -1", () => {
    expect(Calculator.division(-10, -1)).toBe(10);
  });

  test("0.1 and 0.2", () => {
    expect(Calculator.division(0.1, 0.2)).toBe(0.5);
  });

  test("145  and 531 check fract limit 0.2730696798493409 to 5 fract", () => {
    expect(Calculator.division(145, 531)).toBe(0.27307);
  });

  test("Invalid a parameter", () => {
    expect.assertions(2);
    try {
      Calculator.division("1", 1);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of a parameter");
    }
  });

  test("Invalid b parameter", () => {
    expect.assertions(2);
    try {
      Calculator.division(1, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of b parameter");
    }
  });

  test("B parameter is zero", () => {
    expect.assertions(2);
    try {
      Calculator.division(1, 0);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Division on zero not permited");
    }
  });
});

describe("Test modulo", () => {
  test("1 and 1", () => {
    expect(Calculator.modulo(1, 1)).toBe(0);
  });

  test("10 and 2", () => {
    expect(Calculator.modulo(10, 2)).toBe(0);
  });

  test("10 and 3", () => {
    expect(Calculator.modulo(10, 3)).toBe(1);
  });

  test("10 and 30", () => {
    expect(Calculator.modulo(10, 30)).toBe(10);
  });

  test("-10 and 30", () => {
    expect(Calculator.modulo(-10, 30)).toBe(-10);
  });

  test("Invalid a parameter", () => {
    expect.assertions(2);
    try {
      Calculator.modulo("1", 1);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of a parameter");
    }
  });

  test("Invalid b parameter", () => {
    expect.assertions(2);
    try {
      Calculator.modulo(1, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of b parameter");
    }
  });

  test("B parameter is zero", () => {
    expect.assertions(2);
    try {
      Calculator.modulo(1, 0);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Modulo on zero not permited");
    }
  });
});

describe("Test multiplication", () => {
  test("1 and 1", () => {
    expect(Calculator.multiplication(1, 1)).toBe(1);
  });

  test("10 and 1", () => {
    expect(Calculator.multiplication(10, 1)).toBe(10);
  });

  test("-10 and 1", () => {
    expect(Calculator.multiplication(-10, 1)).toBe(-10);
  });

  test("0 and 11", () => {
    expect(Calculator.multiplication(0, 11)).toBe(0);
  });

  test("245.23 and 0.12", () => {
    expect(Calculator.multiplication(245.23, 0.12)).toBe(29.4276);
  });

  test("Invalid a parameter", () => {
    expect.assertions(2);
    try {
      Calculator.multiplication("1", 1);
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of a parameter");
    }
  });

  test("Invalid b parameter", () => {
    expect.assertions(2);
    try {
      Calculator.multiplication(1, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of b parameter");
    }
  });
});

describe("Test _fixFractialLength", () => {
  test("1.222 with limit  1", () => {
    expect(Calculator._fixFractialLength(1.222, 1)).toBe(1.2);
  });

  test("1.292 with limit  1", () => {
    expect(Calculator._fixFractialLength(1.292, 1)).toBe(1.3);
  });

  test("1.22222222221 without limit test default limit of 10", () => {
    expect(Calculator._fixFractialLength(1.22222222221)).toBe(1.2222222222);
  });

  test("Invalid number parameter", () => {
    expect.assertions(2);
    try {
      Calculator._fixFractialLength("1.22");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of number parameter");
    }
  });

  test("Invalid limit parameter", () => {
    expect.assertions(2);
    try {
      Calculator._fixFractialLength(1.222, "2");
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual("Incorrect datatype of limit parameter");
    }
  });
});
