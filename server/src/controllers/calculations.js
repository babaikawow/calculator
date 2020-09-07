const Model = require("../models/calculations.js");

exports.add = async (req, res) => {
  const dtoIn = req.body;
  const dtoOut = await Model.add(dtoIn);
  res.status(200).json(dtoOut);
};

exports.sub = async (req, res) => {
  const dtoIn = req.body;
  const dtoOut = await Model.sub(dtoIn);

  res.status(200).json(dtoOut);
};

exports.div = async (req, res) => {
  const dtoIn = req.body;
  const dtoOut = await Model.div(dtoIn);

  res.status(200).json(dtoOut);
};

exports.mod = async (req, res) => {
  const dtoIn = req.body;
  const dtoOut = await Model.mod(dtoIn);

  res.status(200).json(dtoOut);
};

exports.mul = async (req, res) => {
  const dtoIn = req.body;
  const dtoOut = await Model.mul(dtoIn);

  res.status(200).json(dtoOut);
};
