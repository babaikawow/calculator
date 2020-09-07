const request = require("supertest");
const app = require("../app.js");

describe("Test /calculations/add", () => {
  const USE_CASE = "add";

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(2);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "1",
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(2);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(-9);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: "a",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "",
      b: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });
});

describe("Test /calculations/sub", () => {
  const USE_CASE = "sub";
  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "1",
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(-11);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: "a",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "",
      b: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });
});

describe("Test /calculations/div", () => {
  const USE_CASE = "div";
  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(1);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "1",
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(1);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 145,
      b: 531,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0.27307);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(-10);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: -1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(10);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: "a",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "",
      b: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 0,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });
});

describe("Test /calculations/mod", () => {
  const USE_CASE = "mod";
  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "1",
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: -1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(0);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: "a",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "",
      b: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 0,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });
});

describe("Test /calculations/mul", () => {
  const USE_CASE = "mul";
  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(1);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "1",
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(1);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(-10);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: -10,
      b: -1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(10);
  });

  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 245.23,
      b: 0.12,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(29.4276);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: "a",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });

  it("Invalid DtoIn", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: "",
      b: 1,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("paramMap");
    expect(res.body).toHaveProperty("code");
    expect(res.body).toHaveProperty("status");
    expect(res.body.message).toEqual("Invalid dtoIn");
    expect(res.body.code).toEqual("InvalidDtoIn");
    expect(res.body.status).toEqual(400);
  });
});

describe("Test 404", () => {
  const USE_CASE = "notexist";
  it("HDS", async () => {
    const res = await request(app).post(`/calculations/${USE_CASE}`).send({
      a: 1,
      b: 1,
    });
    expect(res.statusCode).toEqual(404);
  });

});

