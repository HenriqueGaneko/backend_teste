import { createProduct, getAllProducts, getProductById } from "../services/productService.js";

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar produtos",
        });
    }
}

export const createProductController = async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar produto", details: error.message });
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            req.status(500).json({ error: "Produto não encontrado" });
        }
    } catch (error) {
        req.status(500).json({ error: "Erro ao buscar produto" });
    }
}