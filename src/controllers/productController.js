import {getAllProducts} from '../services/productService.js';

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
}