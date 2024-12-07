const service = require("../services/dataServices.js");
const getData = async (req, res) => {
  try {
    const data = await service.getData();
    res
      .status(200)
      .json({ success: true, message: "data get successfully", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Data not found" });
  }
};

const sendData = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log the received data to check

    const data = await service.sendData(req.body);
    res
      .status(200)
      .json({ success: true, message: "data send successfully", data: data });
  } catch (error) {
    console.error("Error sending data:", error); // Log any errors
    res.status(500).json({ success: false, message: "Data not send" });
  }
};

module.exports = { getData, sendData };
