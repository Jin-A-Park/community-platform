package com.example.first.project.dto;

import com.example.first.project.entity.Comment;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class CommentDto {
    private Long id;

    @JsonProperty("article_id")
    private Long articleId;

    private String nickname;
    private String body;
    private String Username;

    public static CommentDto creatCommentDto(Comment comment) {
        return new CommentDto(
                comment.getId(),
                comment.getArticle().getId(),
                comment.getNickname(),
                comment.getBody(),
                comment.getUsername()
        );
    }
}
