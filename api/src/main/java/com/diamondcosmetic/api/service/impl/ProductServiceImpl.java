package com.diamondcosmetic.api.service.impl;

import com.diamondcosmetic.api.model.Product;
import com.diamondcosmetic.api.repository.ProductRepository;
import com.diamondcosmetic.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {


    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) {

        String productId = product.getProduct_id();

        return productRepository.save(product);

    }

    @Override
    public Product update(Product product) {
        return productRepository.save(product);
    }

    @Override
    public boolean delete(String id) {
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Product findById(String id) {
        return productRepository.findById(id).orElse(null);
    }



    @Override
    public boolean existsById(String id) {
        return productRepository.existsById(id); // Convert id to the correct type if necessary
    }



    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
