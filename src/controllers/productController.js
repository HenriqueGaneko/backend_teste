import {createProduct, getAllProducts, getProductsById} from '../services/productService.js';

export const  getProducts = async(req, res) => {
    try{
        const products = await getAllProducts();
        res.jason(products)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar produtos",
        });
    }
};

export const createProductController = async(req,res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct)
    }
    catch(error){
        res.status(500).json({error: "Erro ao criar o produto"});
    }
};

export const getProduct = async(req, res) => {
    try { 
        const product = await getProductsById(req.params.id)
        if(product) {
            res.json(product);
        }else{
            res.status(500).json({error: "Produto não encontrado"})
        }
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar produto"});
    }
};