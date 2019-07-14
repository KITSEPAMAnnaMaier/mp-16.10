const Device = require("../models/devices");
const { sendRequest } = require("../utils/request");

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
  updateDeviceState
};

function deviceAdapter({ _id, name, address, port, state, log }) {
  return {
    id: _id,
    name,
    address,
    port,
    state,
    log
  };
}

async function getDevices() {
  const devices = await Device.find({}).exec();
  return devices.map(deviceAdapter);
}

async function getDeviceById(deviceId) {
  const device = await Device.findById(deviceId).exec();
  return deviceAdapter(device);
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
  if (!data) {
    return null;
  }
  if (data.state) {
    const device = await getDeviceById(deviceId);

    data.log = [
      ...(Array.isArray(device.log) ? device.log : []),
      {
        action: data.state,
        date: new Date().toLocaleString()
      }
    ];
  }

  await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === "off" ? "Power off" : "Power On";
  const url = `http://${address}:${port}/cm?cmnd=${command}`;
  return sendRequest(url);
}
