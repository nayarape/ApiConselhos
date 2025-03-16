const express = require("express");
const router = express.Router();
const { RandomAdvice, AdviceById, searchAdvice } = require("../controllers/adviceController");

router.get("/advice", RandomAdvice);
router.get("/advice/:id", AdviceById);
router.get("/advice/search/:query", searchAdvice);

module.exports = router;
