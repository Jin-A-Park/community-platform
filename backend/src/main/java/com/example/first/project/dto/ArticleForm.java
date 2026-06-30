package com.example.first.project.dto;

import com.example.first.project.entity.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter
public class ArticleForm {
    private Long id;
    private String title;
    private String content;
    private String author;

    public Article toEntity() {
        return new Article(id, title, content, author);
    }
}



