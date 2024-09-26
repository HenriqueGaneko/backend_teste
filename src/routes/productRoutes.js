import { Router } from "express";
import { createProductController, getProducts ,getProduct, updateProductController, deleteProductController} from "../controllers/productController.js";

const router = new Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id",deleteProductController);

export default router;