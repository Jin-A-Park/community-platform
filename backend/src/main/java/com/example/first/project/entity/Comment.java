package com.example.first.project.entity;

import com.example.first.project.dto.CommentDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class Comment {
    @Id //대표 키 지정 어노테이션
    @GeneratedValue(strategy = GenerationType.IDENTITY) //DB가 자동으로 1씩 증가
    private Long id; //대표 키

    @ManyToOne //comment-article 다대일 관계 지정
    @JoinColumn(name="article_id") //외래 키 생성, article 엔티티의 기본 키와 매핑
    private Article article; //해당 댓글이 달려있는 게시글

    @Column //해당 필드를 테이블의 속성으로 매핑
    private String nickname; //댓글 단 사람 이름

    @Column
    private String body; //댓글 본문

    @Column
    private String username;


    public static Comment createComment(CommentDto dto, Article article, String username) {
        if (dto.getId() != null) throw new IllegalArgumentException("댓글 생성 실패! 댓글의 id가 없어야 합니다");
        if (!dto.getArticleId().equals(article.getId())) throw new IllegalArgumentException("댓글 생성 실패! 게시글의 id가 잘못됐습니다");
        return new Comment(dto.getId(), article, dto.getNickname(), dto.getBody(), username);
    }

    public void patch(CommentDto dto) {
        //예외 발생
        if(this.id != dto.getId())
            throw new IllegalArgumentException("댓글 수정 실패! 잘못된 id가 입력됐습니다");
        //객체 갱신
        if(dto.getNickname() != null)
            this.nickname = dto.getNickname();
        if(dto.getBody() != null)
            this.body = dto.getBody();
    }
}

