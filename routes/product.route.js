const express = require("express")
const Product = require('../models/product.model.js')
const router = express.Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js")

// Get all products details in the database => READ
router.get('/', getProducts)

// Get specific product from database using ID => READ
router.get("/:id", getProduct)

// Add products to the database  => CREATE
router.post("/", createProduct)

// Update Product Details => UPDATE
router.put("/:id", updateProduct)

// Delete a product => DELETE
router.delete("/:id", deleteProduct)



module.exports = router