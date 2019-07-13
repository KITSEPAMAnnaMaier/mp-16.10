const http = require("http");

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      if (res.statusCode !== 200) {
        reject(res.statusCode);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { sendRequest };
