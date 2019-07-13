import axios from "axios";

const API_URL = "http://localhost:4000";

export async function getDevices() {
  const response = await axios.get(`${API_URL}/devices`);
  return response.data;
}

export async function getDeviceById(deviceId) {
  const response = await axios.get(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function addDevice(device) {
  await axios.post(`${API_URL}/devices`, device);
}

export async function removeDevice(deviceId) {
  await axios.delete(`${API_URL}/devices/${deviceId}`);
}

export async function updateDevice(deviceId, data) {
  await axios.patch(`${API_URL}/devices/${deviceId}`, data);
}

export async function switchOn(deviceId) {
  await updateDevice(deviceId, {
    state: "on"
  });
}

export async function switchOff(deviceId) {
  await updateDevice(deviceId, {
    state: "off"
  });
}

export async function getDeviceLog(deviceId) {
  return [
    {
      date: "2018-31-08 16:00:00",
      action: "On"
    },
    {
      date: "2018-31-08 17:00:00",
      action: "Off"
    }
  ];
}
