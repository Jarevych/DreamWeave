const express = require("express");
const router = express.Router();
const {getAllProducts} = require("../controllers/storesController");

// Обробник для GET-запиту на маршрут /store
router.get('/pharm/store', getAllProducts);

module.exports = router;
