const express = require("express");
const groupsService = require("../services/groups");
const router = express.Router();

router.get("/", async (req, res) => {
  const groups = await groupsService.getGroups();
  res.json(groups);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const group = await groupsService.getGroupById(id);
  if (group) {
    res.json(group);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  await groupsService.addGroup(data);
  res.sendStatus(201);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await groupsService.removeGroup(id);
  res.sendStatus(200);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await groupsService.updateGroup(id, data);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.post("/:groupId/addDevice/:deviceId", async (req, res) => {
  const { groupId, deviceId } = req.params;
  await groupsService.addDeviceToGroup(groupId, deviceId);
  res.sendStatus(201);
});

router.delete("/:groupId/removeDevice/:deviceId", async (req, res) => {
  const { groupId, deviceId } = req.params;
  await groupsService.removeDeviceFromGroup(groupId, deviceId);
  res.sendStatus(200);
});

router.get("/log/:id", async (req, res) => {
  const { id } = req.params;
  const group = await groupsService.getGroupById(id);

  if (group) {
    res.json(group.log);
  } else {
    res.sendStatus(404);
  }
});

router.patch("/log/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    await groupsService.updateGroup(id, data);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
