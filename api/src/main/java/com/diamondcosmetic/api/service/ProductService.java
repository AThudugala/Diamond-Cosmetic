package com.diamondcosmetic.api.service;

import com.diamondcosmetic.api.model.Product;

import java.util.List;

public interface ProductService {
    public Product save(Product product);
    public Product update(Product product);
    public boolean delete(String id);
    public Product findById(String  id);
    public boolean existsById(String id);


    public List<Product> findAll();

}
