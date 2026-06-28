import '../../styles/New.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function New(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/articles`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content})
        });
        if(response.ok){
            navigate(`/articles`);
        }
    }

    return(
        <>
            <div className="page-wrapper">
                <a href="/articles" className="back-link">목록으로 돌아가기</a>

                <div className="form-card">
                    <div className="form-card-header">
                    <div className="form-badge">✦</div>
                    <div>
                        <div className="form-title">새 글 작성</div>
                        <div className="form-subtitle">New Article</div>
                    </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="form-body">
                        <div className="field-group">
                        <label className="field-label" htmlFor="title-input">제목</label>
                        <input type="text" className="field-input" onChange={(e) => setTitle(e.target.value)} name="title" id="title-input" placeholder="글 제목을 입력하세요"/>
                        </div>
                        <div className="field-group">
                        <label className="field-label" htmlFor="content-input">내용</label>
                        <textarea rows={3} className="field-textarea" onChange={(e) => setContent(e.target.value)} name="content" id="content-input" placeholder="내용을 입력하세요..."></textarea>
                        </div>
                    </div>

                    <div className="form-footer">
                        <button type="submit" className="btn-submit">게시하기</button>
                        <a href="/articles" className="btn-cancel">취소</a>
                    </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default New;