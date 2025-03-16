const axios = require("axios");

const BASE_URL = "https://api.adviceslip.com";


const RandomAdvice = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/advice`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar conselho." });
  }
};


const AdviceById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/advice/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar conselho pelo ID." });
  }
};


const searchAdvice = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/advice/search/${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar conselhos pela palavra-chave." });
  }
};

module.exports = { RandomAdvice, AdviceById, searchAdvice };
