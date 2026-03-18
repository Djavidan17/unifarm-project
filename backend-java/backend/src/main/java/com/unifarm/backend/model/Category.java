package com.unifarm.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    // Self-referencing parent category
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Category parent;

    // Optional: list of child categories
    @OneToMany(mappedBy = "parent")
    private List<Category> children;
}