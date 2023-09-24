package com.diamondcosmetic.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @Column(name = "product_id", nullable = false)
    private String product_id;
    private String product_name;
    private String product_category;
    private String product_description;
    private String directions;
    private float price;
    private int in_stock;
}
