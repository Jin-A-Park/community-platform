import {useState} from 'react';


function List({commentDtos, onUpdate, onDelete}){

    const [editComment, setEditComment] = useState({
        id: '', nickname: '', body: '', articleId: ''
    });

    const handleEditClick = (comment) => {
        setEditComment({
            id: comment.id,
            nickname: comment.nickname,
            body: comment.body,
            articleId: comment.articleId
        });
    };

    const handleUpdate = () => {
        fetch(`http://localhost:8080/api/comments/${editComment.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editComment)
        }).then(response => {
            if(response.ok){
                const msg = response.ok ? "댓글이 수정됐습니다." : "댓글 수정 실패";
                onUpdate(editComment);
                alert(msg);

                const modal = window.bootstrap.Modal.getInstance(document.querySelector('#comment-edit-modal'));
                modal.hide();
            }
        });
    };

    const handleDelete = (commentId) => {
        fetch(`http://localhost:8080/api/comments/${commentId}`, {
            method: "DELETE"
        }).then(response => {
            if(response.ok){
                const msg = response.ok ? "댓글이 삭제됐습니다." : "댓글 식제 실패";
                onDelete(commentId);
                alert(msg);
            }
        });
    };

    return(
        <>
            <div id="comments-list">
                {commentDtos.map((comment) =>(
                    <div key={comment.id} className="card m-2" id={`comments-${comment.id}`}>
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>{comment.nickname}</span>
                            <div>
                                <button type="button" className="btn btn-sm btn-outline-primary me-2"
                                    data-bs-toggle="modal" data-bs-target="#comment-edit-modal"
                                    onClick={() => handleEditClick(comment)}>수정</button>
                                <button type="button" className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDelete(comment.id)}>삭제</button>
                            </div>
                        </div>
                        <div className="card-body">
                            {comment.body}
                        </div>
                    </div>
                ))}
            </div>
            <div className="modal fade" id="comment-edit-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">댓글 수정</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="edit-comment-nickname" className="form-label">닉네임</label>
                                    <input type="text" id="edit-comment-nickname" className="form-control" value={editComment.nickname} onChange={(e) => setEditComment({...editComment, nickname: e.target.value})}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edit-comment-body" className="form-label">댓글 내용</label>
                                    <textarea id="edit-comment-body" className="form-control" rows={3} value={editComment.body} onChange={(e) => setEditComment({...editComment, body: e.target.value})}></textarea>
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