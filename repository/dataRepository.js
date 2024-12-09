const prisma = require("../config/config.js");

const getData = async () => {
  return await prisma.data.findMany();
};
const sendData = async (data) => {
  console.log("Repository received data:", data);
  return await prisma.data.create({
    data: {
      temperature: data.temperature,
      humidity: data.humidity,
      nh3: data.nh3,
    },
  });
};

module.exports = {
  sendData,
  getData,
};
