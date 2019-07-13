const Device = require("../models/devices");
const { sendRequest } = require("../utils/request");

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice
};

let index = 2;
let devices = {
  device1: {
    id: "device1",
    name: "Device #1",
    address: "192.168.1.50",
    port: 90,
    state: "on"
  },
  device2: {
    id: "device2",
    name: "Device #2",
    address: "192.168.1.60",
    port: 80,
    state: "off"
  }
};

function deviceAdapter({ _id, name, address, port, state }) {
  return {
    id: _id,
    name,
    address,
    port,
    state
  };
}

async function getDevices() {
  const devices = await Device.find({}).exec();
  return devices.map(deviceAdapter);
}

async function getDeviceById(deviceId) {
  return await Device.findById(deviceId).exec();
}

async function addDevice(data) {
  const device = new Device({
    state: "off",
    ...data
  });

  await device.save();
}

async function removeDevice(deviceId) {
  const device = await Device.findByIdAndDelete(deviceId).exec();
  if (device) {
    return deviceAdapter(device);
  } else {
    return null;
  }
}

async function updateDevice(deviceId, data) {
  const device = await Device.findById(deviceId).exec();
  if (!data) {
    return null;
  }
  if (data.state) {
    await updateDeviceState(device.address, device.port, device.state);
  }
  await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === "off" ? "Power off" : "Power On";
  const url = `http://${address}:${port}/cm?cmnd=${command}`;
  return sendRequest(url);
}
