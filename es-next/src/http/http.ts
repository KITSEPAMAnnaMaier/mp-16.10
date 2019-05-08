import axios from 'axios';

export default class HTTP {
  static async get(url: string) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async post(url: string, data?: object) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async put(url: string, data?: object) {
    try {
      const response = await axios.put(url, data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(url: string) {
    try {
      const response = await axios.delete(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}