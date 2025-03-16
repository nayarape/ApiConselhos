const express = require("express");
const cors = require("cors");
const adviceRoutes = require("./routes/adviceRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", adviceRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
