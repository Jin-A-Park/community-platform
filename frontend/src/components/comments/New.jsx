import {useState} from 'react';

function New({articleId, onAdd}){
    const [nickname, setNickname] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        const comment = {
            nickname: nickname,
            body: body,
            article_id: articleId
        };
        fetch(`http://localhost:8080/api/articles/${articleId}/comments`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comment)
        })
        .then(response => response.json())   // 응답을 JSON으로 파싱
        .then(data => {
            onAdd(data);  // 부모 Comments.jsx의 handleAdd 호출 → state 업데이트
        });
    };

    return(
        <>
            <div className="card m-2">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="new-comment-nickname" className="form-label">닉네임</label>
                            <input id="new-comment-nickname" className="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="new-comment-body" className="form-label">댓글 내용</label>
                            <textarea id="new-comment-body" className="form-control" value={body} onChange={(e) => setBody(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>댓글 작성</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default New;