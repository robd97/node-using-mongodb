import { addnewProduct, 
        getProducts,
        getProductWithID,
        deleteProduct,
        updateProduct
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/products')
        // get multiple products
        .get(getProducts)

        //Post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')
        // Get a specific product with ID
        .get(getProductWithID)

        // Update a specific product
        .put(updateProduct)
        
        // Delete a specific product
        .delete(deleteProduct);
}

export default routes;
