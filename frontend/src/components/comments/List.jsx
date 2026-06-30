import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import '../../styles/Comments.css';

function List({ commentDtos, onUpdate, onDelete }) {
    const [editComment, setEditComment] = useState(null);

    const token = localStorage.getItem('token');
    const currentUser = token ? JSON.parse(atob(token.split('.')[1])).sub : null;

    const handleEditClick = (comment) => {
        setEditComment({ id: comment.id, nickname: comment.nickname, body: comment.body, articleId: comment.articleId });
    };

    const handleUpdate = () => {
        axiosInstance.patch(`/api/comments/${editComment.id}`, editComment)
            .then(() => {
                onUpdate(editComment);
                setEditComment(null);
            })
            .catch(() => alert('수정 권한이 없습니다.'));
    };

    const handleDelete = (commentId) => {
        if (!window.confirm('댓글을 삭제하시겠습니까?')) return;
        axiosInstance.delete(`/api/comments/${commentId}`)
            .then(() => onDelete(commentId))
            .catch(() => alert('삭제 권한이 없습니다.'));
    };

    return (
        <>
            <div className="comment-list">
                {commentDtos.map((comment) => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-header">
                            <span className="comment-nickname">@{comment.nickname}</span>
                            {currentUser === comment.username && (
                                <div className="comment-actions">
                                    <button className="comment-btn comment-btn-edit" onClick={() => handleEditClick(comment)}>수정</button>
                                    <button className="comment-btn comment-btn-delete" onClick={() => handleDelete(comment.id)}>삭제</button>
                                </div>
                            )}
                        </div>
                        <div className="comment-body">{comment.body}</div>
                    </div>
                ))}
            </div>

            {/* 수정 모달 */}
            {editComment && (
                <div className="comment-modal-overlay" onClick={() => setEditComment(null)}>
                    <div className="comment-modal" onClick={(e) => e.stopPropagation()}>
                        <h2 className="comment-modal-title">댓글 수정</h2>
                        <div className="comment-modal-field">
                            <label className="comment-modal-label">닉네임</label>
                            <input
                                className="comment-input"
                                value={editComment.nickname}
                                onChange={(e) => setEditComment({ ...editComment, nickname: e.target.value })}
                            />
                        </div>
                        <div className="comment-modal-field">
                            <label className="comment-modal-label">댓글 내용</label>
                            <textarea
                                className="comment-textarea"
                                value={editComment.body}
                                onChange={(e) => setEditComment({ ...editComment, body: e.target.value })}
                            />
                        </div>
                        <div className="comment-modal-footer">
                            <button className="comment-submit-btn" onClick={handleUpdate}>수정 완료</button>
                            <button className="comment-modal-cancel" onClick={() => setEditComment(null)}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default List;
