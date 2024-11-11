const express = require("express");
const { serviceModel } = require("../Models/Service");
const { auth } = require("../Middleware/auth");

const serviceRouter = express.Router();

serviceRouter.get("/", auth, async (req, res) => {
  try {
    const data = await serviceModel.find({ userId: req.body.userId });
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
});

serviceRouter.post("/add", auth, async (req, res) => {
  try {
    const user = new serviceModel(req.body);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Service booked successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
});

module.exports = {
  serviceRouter,
};
