import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import '../../styles/Comments.css';

function New({ articleId, onAdd }) {
    const [nickname, setNickname] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const username = JSON.parse(atob(token.split('.')[1])).sub;
            setNickname(username);
        }
    }, []);

    const handleSubmit = () => {
        if (!body.trim()) return;
        axiosInstance.post(`/api/articles/${articleId}/comments`, {
            nickname,
            body,
            article_id: articleId
        }).then(res => {
            onAdd(res.data);
            setBody('');
        });
    };

    return (
        <div className="comment-new">
            <p className="comment-new-title">댓글 작성</p>
            <input
                className="comment-input"
                placeholder="닉네임"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <textarea
                className="comment-textarea"
                placeholder="댓글을 입력하세요..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button className="comment-submit-btn" onClick={handleSubmit}>댓글 작성</button>
        </div>
    );
}

export default New;
