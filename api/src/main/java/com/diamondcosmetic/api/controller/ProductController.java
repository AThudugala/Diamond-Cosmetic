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
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id,
                                                 @RequestBody Product product){
        if(!productService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        product.setProduct_id(id);
        Product updateProduct = productService.update(product);
        return ResponseEntity.ok(updateProduct);
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id){
        if(!productService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        productService.delete(id);
        return ResponseEntity.ok().build();
    }
}
