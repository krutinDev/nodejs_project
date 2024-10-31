const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");

router.get(
	"/company/:companyId/products",
	exampleController.getAllProductsOfCompany
);

module.exports = router;
