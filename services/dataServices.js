const repository = require("../repository/dataRepository.js");
const getData = async () => {
  return await repository.getData();
};

const sendData = async (data) => {
  console.log("Service received data:", data);
  return await repository.sendData(data);
};

module.exports = {
  getData,
  sendData,
};
