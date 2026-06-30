package com.example.first.project.service;

import com.example.first.project.dto.CommentDto;
import com.example.first.project.entity.Article;
import com.example.first.project.entity.Comment;
import com.example.first.project.repository.ArticleRepository;
import com.example.first.project.repository.CommentRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private ArticleRepository articleRepository;

    public List<CommentDto> comments(Long articleId) {
        //결과 반환
        return commentRepository.findByArticleId(articleId)
                .stream()
                .map(comment -> CommentDto.creatCommentDto(comment))
                .collect(Collectors.toList());
    }

    @Transactional
    public CommentDto create(Long articleId, CommentDto dto, String username) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("댓글 생성 실패 대상 게시글이 없습니다."));
        Comment comment = Comment.createComment(dto, article, username);  // username 전달
        Comment created = commentRepository.save(comment);
        return CommentDto.creatCommentDto(created);
    }

    @Transactional
    public CommentDto update(Long id, CommentDto dto, String username) {
        Comment target = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("댓글 수정 실패 대상 댓글이 없습니다."));
        if (!target.getUsername().equals(username)) return null;  // 권한 체크
        target.patch(dto);
        Comment updated = commentRepository.save(target);
        return CommentDto.creatCommentDto(updated);
    }

    public CommentDto delete(Long id, String username) {
        Comment target = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("댓글 삭제 실패 대상이 없습니다."));
        if (!target.getUsername().equals(username)) return null;  // 권한 체크
        commentRepository.delete(target);
        return CommentDto.creatCommentDto(target);
    }
}
