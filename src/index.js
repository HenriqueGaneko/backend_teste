import express from "express";
import productRoutes from "./routes/productRoutes.js";
import customeRoutes from "./routes/customeRoutes.js";

const app = express();
app.use(express.json());

app.use(productRoutes);
app.use(customeRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
