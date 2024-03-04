require("dotenv").config();
const axios = require("axios");

async function getStockInfo(stockName) {
  const apiUrl = process.env.STOCK_API_URL + stockName;
  return await axios.get(apiUrl);
}

module.exports = {
  getStockInfo,
};
