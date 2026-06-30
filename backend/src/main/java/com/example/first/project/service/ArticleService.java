package com.example.first.project.service;

import com.example.first.project.dto.ArticleForm;
import com.example.first.project.entity.Article;
import com.example.first.project.repository.ArticleRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    public Page<Article> index(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return articleRepository.findAll(pageable);
    }

    public List<Article> search(String keyword) {
        return articleRepository.findByTitleContainingOrContentContaining(keyword, keyword);
    }

    public Article show(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

    public Article create(ArticleForm dto) {
        Article article = dto.toEntity();
        if (article.getId() != null) return null;
        return articleRepository.save(article);
    }

    public Article update(Long id, ArticleForm dto, String username) {
        Article article = dto.toEntity();
        Article target = articleRepository.findById(id).orElse(null);
        if (target == null || id != article.getId()) {
            log.info("잘못된 요청! id: {}, article: {}", id, article.toString());
            return null;
        }
        if (!target.getAuthor().equals(username)) {
            log.info("권한 없음! username: {}", username);
            return null;
        }
        target.patch(article);
        return articleRepository.save(target);
    }

    public Article delete(Long id, String username) {
        Article target = articleRepository.findById(id).orElse(null);
        if (target == null) return null;
        if (!target.getAuthor().equals(username)) {
            log.info("권한 없음! username: {}", username);
            return null;
        }
        articleRepository.delete(target);
        return target;
    }

    @Transactional
    public List<Article> createArticles(List<ArticleForm> dtos) {
        List<Article> articleList = dtos.stream()
                .map(dto -> dto.toEntity())
                .collect(Collectors.toList());
        articleList.stream()
                .forEach(article -> articleRepository.save(article));

        //강제 에러(롤백 테스트용)
        articleRepository.findById(-1L)
                .orElseThrow(() -> new IllegalArgumentException("결제 실패!"));

        return articleList;
    }
}
