
class Calculator {
  /**
   * @param params {object}
   * @param {object} [params.fractLimit=5] - limit of fract part of numbers,
   * all numbers will have limited fract part (numbers after dot). Fract part during cutting is rounded
   */
  constructor(params) {
    this.FRACTIAL_PART_LIMIT_NUMBERS = params.fractLimit || 5;
  }

  /**
   * addition - method made addition of two numbers
   * @param a {number}
   * @param b {number}
   * @return {number}
   */
  addition(a, b) {
    if (typeof a !== "number") {
      throw new Error("Incorrect datatype of a parameter");
    }

    if (typeof b !== "number") {
      throw new Error("Incorrect datatype of b parameter");
    }

    const result =
      this._fixFractialLength(a, this.FRACTIAL_PART_LIMIT_NUMBERS) +
      this._fixFractialLength(b, this.FRACTIAL_PART_LIMIT_NUMBERS);
    return this._fixFractialLength(result, this.FRACTIAL_PART_LIMIT_NUMBERS);
  }

  /**
   * addition - method made subtraction of two numbers
   * eg
   *  a = 2
   *  b = 3
   *  result = -1
   * @param a {number}
   * @param b {number}
   * @return {number}
   */
  subtraction(a, b) {
    if (typeof a !== "number") {
      throw new Error("Incorrect datatype of a parameter");
    }

    if (typeof b !== "number") {
      throw new Error("Incorrect datatype of b parameter");
    }

    const result =
      this._fixFractialLength(a, this.FRACTIAL_PART_LIMIT_NUMBERS) -
      this._fixFractialLength(b, this.FRACTIAL_PART_LIMIT_NUMBERS);
    return this._fixFractialLength(result, this.FRACTIAL_PART_LIMIT_NUMBERS);
  }

  /**
   * division - method divide first number by second
   * @param a {number}
   * @param b {number} -  zeros not allowed
   * @return {number}
   */
  division(a, b) {
    if (typeof a !== "number") {
      throw new Error("Incorrect datatype of a parameter");
    }

    if (typeof b !== "number") {
      throw new Error("Incorrect datatype of b parameter");
    }

    if (b === 0) {
      throw new Error("Division on zero not permited");
    }

    const result =
      this._fixFractialLength(a, this.FRACTIAL_PART_LIMIT_NUMBERS) /
      this._fixFractialLength(b, this.FRACTIAL_PART_LIMIT_NUMBERS);
    return this._fixFractialLength(result, this.FRACTIAL_PART_LIMIT_NUMBERS);
  }

  /**
   * modulo - method find modulo if two numbers, native js operation of "%"
   * Eg
   * a = 10
   * b = 3
   * result = 1
   * @param a {number}
   * @param b {number} -  zeros not allowed
   * @return {number}
   */
  modulo(a, b) {
    if (typeof a !== "number") {
      throw new Error("Incorrect datatype of a parameter");
    }

    if (typeof b !== "number") {
      throw new Error("Incorrect datatype of b parameter");
    }

    if (b === 0) {
      throw new Error("Modulo on zero not permited");
    }

    const result =
      this._fixFractialLength(a, this.FRACTIAL_PART_LIMIT_NUMBERS) %
      this._fixFractialLength(b, this.FRACTIAL_PART_LIMIT_NUMBERS);
    return this._fixFractialLength(result, this.FRACTIAL_PART_LIMIT_NUMBERS);
  }

  /**
   * multiplication - method made multiplication of two numbers
   * @param a {number}
   * @param b {number}
   * @return {number}
   */
  multiplication(a, b) {
    if (typeof a !== "number") {
      throw new Error("Incorrect datatype of a parameter");
    }

    if (typeof b !== "number") {
      throw new Error("Incorrect datatype of b parameter");
    }

    const result =
      this._fixFractialLength(a, this.FRACTIAL_PART_LIMIT_NUMBERS) *
      this._fixFractialLength(b, this.FRACTIAL_PART_LIMIT_NUMBERS);
    return this._fixFractialLength(result, this.FRACTIAL_PART_LIMIT_NUMBERS);
  }

  /**
   * _fixFractialLength - Limit fractial part of number with rouning fractial
   * EG if number is 2.237 and limit is 2 - result will be 2.34
   *    if number is 2.234 and limit is 2 - result will be 2.33
   * @param number {number}
   * @param limit {number}
   * @return {number}
   */
  _fixFractialLength(number, limit = 10) {
    if (typeof number !== "number") {
      throw new Error("Incorrect datatype of number parameter");
    }

    if (typeof limit !== "number") {
      throw new Error("Incorrect datatype of limit parameter");
    }

    return Number(number.toFixed(limit));
  }
}

module.exports = Calculator;
