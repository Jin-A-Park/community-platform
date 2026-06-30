import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

function List({ commentDtos, onUpdate, onDelete }) {
    const [editComment, setEditComment] = useState({ id: '', nickname: '', body: '', articleId: '' });

    const token = localStorage.getItem('token');
    const currentUser = token ? JSON.parse(atob(token.split('.')[1])).sub : null;

    const handleEditClick = (comment) => {
        setEditComment({ id: comment.id, nickname: comment.nickname, body: comment.body, articleId: comment.articleId });
    };

    const handleUpdate = () => {
        axiosInstance.patch(`/api/comments/${editComment.id}`, editComment)
            .then(res => {
                onUpdate(editComment);
                alert('댓글이 수정됐습니다.');
                const modal = window.bootstrap.Modal.getInstance(document.querySelector('#comment-edit-modal'));
                modal.hide();
            })
            .catch(() => alert('수정 권한이 없습니다.'));
    };

    const handleDelete = (commentId) => {
        axiosInstance.delete(`/api/comments/${commentId}`)
            .then(() => {
                onDelete(commentId);
                alert('댓글이 삭제됐습니다.');
            })
            .catch(() => alert('삭제 권한이 없습니다.'));
    };

    return (
        <>
            <div id="comments-list">
                {commentDtos.map((comment) => (
                    <div key={comment.id} className="card m-2" id={`comments-${comment.id}`}>
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>{comment.nickname}</span>
                            {currentUser === comment.username && (  // 본인 댓글만 버튼 표시
                                <div>
                                    <button type="button" className="btn btn-sm btn-outline-primary me-2"
                                        data-bs-toggle="modal" data-bs-target="#comment-edit-modal"
                                        onClick={() => handleEditClick(comment)}>수정</button>
                                    <button type="button" className="btn btn-sm btn-outline-danger"
                                        onClick={() => handleDelete(comment.id)}>삭제</button>
                                </div>
                            )}
                        </div>
                        <div className="card-body">{comment.body}</div>
                    </div>
                ))}
            </div>
            <div className="modal fade" id="comment-edit-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">댓글 수정</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">닉네임</label>
                                    <input type="text" className="form-control" value={editComment.nickname} onChange={(e) => setEditComment({ ...editComment, nickname: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">댓글 내용</label>
                                    <textarea className="form-control" rows={3} value={editComment.body} onChange={(e) => setEditComment({ ...editComment, body: e.target.value })}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>수정 완료</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;