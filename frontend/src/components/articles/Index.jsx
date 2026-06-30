import '../../styles/Index.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../api/axiosInstance';

function Index() {
    const [articleList, setArticleList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const { isLoggedIn } = useAuth();

    const fetchArticles = (p = 0) => {
        axiosInstance.get(`/api/articles?page=${p}&size=10`)
            .then(res => {
                setArticleList(res.data.content);
                setTotalPages(res.data.totalPages);
                setPage(p);
            });
    };

    useEffect(() => {
        fetchArticles(0);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!keyword.trim()) {
            fetchArticles(0);
            return;
        }
        axiosInstance.get(`/api/articles/search?keyword=${keyword}`)
            .then(res => {
                setArticleList(res.data);
                setTotalPages(1);
                setPage(0);
            });
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">게시판</h1>
                        <p className="page-subtitle">Articles</p>
                    </div>
                    {isLoggedIn && <a href="/articles/new" className="btn-new">새 글 작성</a>}
                </div>

                {/* 검색창 */}
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    <input
                        className="field-input"
                        placeholder="제목 또는 내용으로 검색"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="btn-new" style={{ whiteSpace: 'nowrap' }}>검색</button>
                </form>

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
                                <div className="article-preview">
                                    {article.author && <span style={{ color: 'var(--accent)', marginRight: '8px' }}>@{article.author}</span>}
                                    {article.content}
                                </div>
                            </div>
                            <span className="article-arrow">→</span>
                        </a>
                    ))}
                    {articleList.length === 0 && (
                        <div className="empty-state">
                            <div className="empty-icon">📄</div>
                            <p>검색 결과가 없습니다.</p>
                        </div>
                    )}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                        <button
                            className="btn-new"
                            onClick={() => fetchArticles(page - 1)}
                            disabled={page === 0}
                            style={{ opacity: page === 0 ? 0.4 : 1 }}
                        >
                            ← 이전
                        </button>
                        <span style={{ display: 'flex', alignItems: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
                            {page + 1} / {totalPages}
                        </span>
                        <button
                            className="btn-new"
                            onClick={() => fetchArticles(page + 1)}
                            disabled={page === totalPages - 1}
                            style={{ opacity: page === totalPages - 1 ? 0.4 : 1 }}
                        >
                            다음 →
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Index;