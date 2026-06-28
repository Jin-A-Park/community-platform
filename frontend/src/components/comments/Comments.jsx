import New from "./New";
import List from "./List";
import {useState, useEffect} from 'react';

function Comments({articleId, commentDtos: initialDtos}){

    const [comments, setComments] = useState([]); // 초기값으로 prop 받아도 됨

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${articleId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [articleId]);

    const handleAdd = (comment) => setComments([...comments, comment]);
    const handleUpdate = (updated) => setComments(comments.map(c => c.id === updated.id ? updated : c));
    const handleDelete = (id) => setComments(comments.filter(c => c.id !== id));

    return(
        <>
            <New articleId={articleId} onAdd={handleAdd} />
            <List commentDtos={comments} onUpdate={handleUpdate} onDelete={handleDelete} />
        </>
    );
}


export default Comments;