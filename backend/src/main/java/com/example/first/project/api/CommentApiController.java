package com.example.first.project.api;

import com.example.first.project.dto.CommentDto;
import com.example.first.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class CommentApiController {
    @Autowired
    private CommentService commentService;

    //댓글 조회
    @GetMapping("api/articles/{articleId}/comments")
    public ResponseEntity<List<CommentDto>> comment(@PathVariable Long articleId){
        //서비스에게 위임
        List<CommentDto> dtos = commentService.comments(articleId);
        //결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }

    @PostMapping("api/articles/{articleId}/comments")
    public ResponseEntity<CommentDto> create(@PathVariable Long articleId,
                                             @RequestBody CommentDto dto,
                                             Principal principal) {
        CommentDto createdDto = commentService.create(articleId, dto, principal.getName());
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

    @PatchMapping("api/comments/{id}")
    public ResponseEntity<CommentDto> update(@PathVariable Long id,
                                             @RequestBody CommentDto dto,
                                             Principal principal) {
        CommentDto updatedDto = commentService.update(id, dto, principal.getName());
        return (updatedDto != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updatedDto) :
                ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @DeleteMapping("api/comments/{id}")
    public ResponseEntity<CommentDto> delete(@PathVariable Long id,
                                             Principal principal) {
        CommentDto deletedDto = commentService.delete(id, principal.getName());
        return (deletedDto != null) ?
                ResponseEntity.status(HttpStatus.OK).body(deletedDto) :
                ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
}
