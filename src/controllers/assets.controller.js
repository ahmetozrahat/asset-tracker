const assetsService = require("../services/assets.service");
const stockApiService = require("../services/stockApi.service");

async function get(req, res, next) {
  const stocks = [
    { name: "THYAO", amount: 10 },
    { name: "ASTOR", amount: 15 },
    { name: "TKNSA", amount: 20 },
  ];

  stocks.forEach(async (stock) => {
    const result = await stockApiService.getStockInfo(stock.name);
    const { alis } = result.data.data.hisseYuzeysel;
    stock.total = alis * stock.amount;
  });

  return res.status(200).json({
    ...stocks,
    total: 0,
  });
}

module.exports = {
  get,
};
