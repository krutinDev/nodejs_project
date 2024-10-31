const { Company, Product } = require("../models");

// Пример контроллера для работы с моделями
exports.getAllProductsOfCompany = async (req, res) => {
	try {
		const companyId = req.params.companyId;
		const company = await Company.findByPk(companyId);
		if (company) {
			const products = await company.getProducts();
			res.json(products);
		} else {
			res.status(404).send("Company not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};
