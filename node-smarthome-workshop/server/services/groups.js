const Group = require("../models/groups");
const devicesService = require("./devices");
const { sendRequest } = require("../utils/request");

module.exports = {
  getGroups,
  getGroupById,
  addGroup,
  removeGroup,
  updateGroup,
  addDeviceToGroup,
  removeDeviceFromGroup
};

function groupAdapter({ _id, name, devices, state, log }) {
  return {
    id: _id,
    name,
    devices,
    state,
    log
  };
}

async function getGroups() {
  const groups = await Group.find({}).exec();
  return groups.map(groupAdapter);
}

async function getGroupById(groupId) {
  const group = await Group.findById(groupId).exec();
  return groupAdapter(group);
}

async function addGroup(data) {
  const group = new Group({
    state: "off",
    ...data
  });

  await group.save();
}

async function removeGroup(groupId) {
  const group = await Group.findByIdAndDelete(groupId).exec();
  if (group) {
    return groupAdapter(group);
  } else {
    return null;
  }
}

async function updateGroup(groupId, data) {
  if (!data) {
    return null;
  }
  if (data.state) {
    const group = await getGroupById(groupId);
    group.devices.forEach(
      async device => await devicesService.updateDevice(device.id, data)
    );

    data.log = [
      ...(Array.isArray(group.log) ? group.log : []),
      {
        action: data.state,
        date: new Date().toLocaleString()
      }
    ];
  }

  await Group.findByIdAndUpdate(groupId, data).exec();
}

async function addDeviceToGroup(groupId, deviceId) {
  const group = await getGroupById(groupId);
  const device = await devicesService.getDeviceById(deviceId);

  const data = {
    devices: [...group.devices, device]
  };

  await Group.findByIdAndUpdate(groupId, data).exec();
}

async function removeDeviceFromGroup(groupId, deviceId) {
  const group = await Group.findById(groupId).exec();

  const data = {
    devices: group.devices.filter(
      groupDevice => groupDevice.id.toString() !== deviceId
    )
  };

  await Group.findByIdAndUpdate(groupId, data).exec();
}
