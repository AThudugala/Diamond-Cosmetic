const apiUrl = 'http://localhost:8080/products';

const getAllProducts = () =>{
    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => console.error('Error fetching products: ', error));

};

const getProductById = (id) => {
    return fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching product by id: ', error));

};


export {getAllProducts, getProductById};

