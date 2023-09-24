package com.diamondcosmetic.api.controller;

import com.diamondcosmetic.api.model.Product;
import com.diamondcosmetic.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product save(@RequestBody Product product){

        if (product.getProduct_id() == null || product.getProduct_id().isEmpty()) {
            throw new IllegalArgumentException("Product ID must be provided in the request body.");
        }

        return productService.save(product);
    }
    @GetMapping
    public List<Product> listProducts() {
        return productService.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") String id){
        Product product = productService.findById(id);
        if(product != null){
            return ResponseEntity.ok(product);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
