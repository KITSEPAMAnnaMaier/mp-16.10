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

export async function updateDeviceState(deviceId, data) {
  await axios.patch(`${API_URL}/devices/log/${deviceId}`, data);
}

export async function switchOn(deviceId) {
  await updateDeviceState(deviceId, {
    state: "on"
  });
}

export async function switchOff(deviceId) {
  await updateDeviceState(deviceId, {
    state: "off"
  });
}

export async function getDeviceLog(deviceId) {
  const response = await axios.get(`${API_URL}/devices/log/${deviceId}`);
  return response.data;
}
