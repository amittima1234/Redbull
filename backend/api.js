const express = require("express");
const router = express.Router();
const Entity = require("./DB/Entity");
const Tool = require("./DB/Tool");

router.get("/", (req, res) => {
  res.send("api works!🔥");
});

router.post("/createEntity", async (req, res) => {
  console.log(req.body.toolName);
  try {
    const tool = await Tool.findOne({ name: req.body.toolName });
    const entity = await Entity.create({
      name: req.body.entityName,
      ip: req.body.ip,
      networkName: req.body.networkName,
      tool: tool,
    });
    await entity.save();
    res.status(200).send("Entity created successfully!👌");
  } catch (e) {
    console.log(e);
    res.status(500).send("Tool doesn't exists😔");
  }
});

router.post("/createTool", async (req, res) => {
  try {
    const tool = await Tool.create({
      name: req.body.toolName,
      docsLink: req.body.docsLink,
    });
    await tool.save();
    res.status(200).send("Tool created successfully!👌");
  } catch (e) {
    res.status(500).send("Error creating tool😔");
  }
});

router.get("/allTools", async (req, res) => {
  try {
    const tools = await Tool.find({});
    res.status(200).send(tools);
  } catch (err) {
    console.log(err);
    res.status(500).send("Tools not found😞");
  }
});

router.get("/allEntities", async (req, res) => {
  try {
    const entities = await Entity.find({});
    res.status(200).send(entities);
  } catch (err) {
    console.log(err);
    res.status(500).send("Entities not found😞");
  }
});

module.exports = router;
