import '../../styles/Edit.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

function Edit() {
    const [article, setArticle] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // 비로그인 차단
        if (!localStorage.getItem('token')) {
            navigate('/login');
            return;
        }
        fetch(`http://localhost:8080/api/articles/${id}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setTitle(data.title);
                setContent(data.content);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.patch(`/api/articles/${id}`, { id, title, content });
            navigate(`/articles/${id}`);
        } catch (err) {
            if (err.response?.status === 403) {
                alert('수정 권한이 없습니다.');
                navigate(`/articles/${id}`);
            }
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <a href={`/articles/${article.id}`} className="back-link">글로 돌아가기</a>
                <div className="form-card">
                    <div className="form-card-header">
                        <div className="form-badge">✏</div>
                        <div>
                            <div className="form-title">글 수정</div>
                            <div className="form-subtitle">Edit Article #{article.id}</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input name="id" type="hidden" value={article.id} />
                        <div className="form-body">
                            <div className="field-group">
                                <label className="field-label" htmlFor="title-input">제목</label>
                                <input type="text" className="field-input" name="title" id="title-input" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="field-group">
                                <label className="field-label" htmlFor="content-input">내용</label>
                                <textarea className="field-textarea" name="content" id="content-input" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            </div>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn-submit">수정 완료</button>
                            <a href={`/articles/${article.id}`} className="btn-cancel">취소</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Edit;