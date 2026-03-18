package com.unifarm.backend.model;

import jakarta.persistence.Id;
import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Basket {

    private Long userId;  // hansı user-ə aiddir
    private List<BasketItem> items; // məhsullar
    private Double totalPrice;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class BasketItem {
        private Long productId;
        private String title;
        private Integer quantity;
        private Double price;
    }
}
