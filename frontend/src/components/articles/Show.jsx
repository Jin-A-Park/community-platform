import '../../styles/Show.css'
import Comments from '../comments/Comments';

import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';


function Show(){

    const [article, setArticle] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${id}`)
            .then(res => res.json())        // JSON 파싱
            .then(data => setArticle(data)); // state에 저장 → 리렌더링
    }, []);

    return(
        <>
            <div className="page-wrapper">
                <a href="/articles" className="back-link">목록으로 돌아가기</a>

                <div className="article-card">
                    <div className="article-card-header">
                    <div className="article-meta">
                        <span className="article-id-badge">#{article.id}</span>
                    </div>
                    <h1 className="article-title">{article.title}</h1>
                    </div>

                    <div className="article-body">
                    <p className="article-content">{article.content}</p>
                    </div>

                    <div className="article-actions">
                        <a href={`/articles/${article.id}/edit`} className="btn btn-edit">✏️ 수정</a>
                        <a href={`/articles/${article.id}/delete`} className="btn btn-delete">🗑 삭제</a>
                        <a href="/articles" className="btn btn-list">← 목록</a>
                    </div>
                </div>

                {
                   article.id && <Comments articleId={article.id} />
                }
            </div>
        </>
    );
}

export default Show;