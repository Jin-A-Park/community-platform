import '../../styles/Index.css';
import { useState, useEffect } from 'react';

function Index(){

    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        // 여기서 fetch
        fetch('http://localhost:8080/api/articles')
            .then(res => res.json())        // JSON 파싱
            .then(data => setArticleList(data)); // state에 저장 → 리렌더링
    }, []);

    return(
        <>
            <div className="page-wrapper">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">게시판</h1>
                        <p className="page-subtitle">Articles</p>
                    </div>
                    <a href="/articles/new" className="btn-new">새 글 작성</a>
                </div>

                <div className="list-header">
                    <span>No.</span>
                    <span>제목 / 내용</span>
                    <span></span>
                </div>
                <div className="article-list">
                    {articleList.map((article) => (
                        <a key={article.id} href={`/articles/${article.id}`} className="article-row">
                        <span className="article-id">#{article.id}</span>
                        <div>
                            <div className="article-title">{article.title}</div>
                            <div className="article-preview">{article.content}</div>
                        </div>
                        <span className="article-arrow">→</span>
                        </a>
                    ))}
                    {articleList.length === 0 && (
                        <div className="empty-state">
                            <div className="empty-icon">📄</div>
                            <p>아직 작성된 글이 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Index;