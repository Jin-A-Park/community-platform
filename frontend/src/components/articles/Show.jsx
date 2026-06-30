import '../../styles/Show.css'
import Comments from '../comments/Comments';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useAuth } from '../../context/AuthContext';

function Show() {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    // localStorage에서 현재 로그인한 유저 이름 꺼내기
    const token = localStorage.getItem('token');
    const currentUser = token ? JSON.parse(atob(token.split('.')[1])).sub : null;

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data));
    }, []);

    const handleDelete = async () => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;
        try {
            await axiosInstance.delete(`/api/articles/${id}`);
            navigate('/articles');
        } catch (err) {
            alert('삭제 권한이 없습니다.');
        }
    };

    const isAuthor = isLoggedIn && article.author === currentUser;

    return (
        <>
            <div className="page-wrapper">
                <a href="/articles" className="back-link">목록으로 돌아가기</a>
                <div className="article-card">
                    <div className="article-card-header">
                        <div className="article-meta">
                            <span className="article-id-badge">#{article.id}</span>
                            {article.author && <span style={{ marginLeft: '8px', color: '#888' }}>by {article.author}</span>}
                        </div>
                        <h1 className="article-title">{article.title}</h1>
                    </div>
                    <div className="article-body">
                        <p className="article-content">{article.content}</p>
                    </div>
                    <div className="article-actions">
                        {isAuthor && (
                            <>
                                <a href={`/articles/${article.id}/edit`} className="btn btn-edit">✏️ 수정</a>
                                <button onClick={handleDelete} className="btn btn-delete">🗑 삭제</button>
                            </>
                        )}
                        <a href="/articles" className="btn btn-list">← 목록</a>
                    </div>
                </div>
                {article.id && <Comments articleId={article.id} />}
            </div>
        </>
    );
}

export default Show;