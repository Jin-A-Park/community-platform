import New from "./New";
import List from "./List";
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

function Comments({ articleId }) {
    const [comments, setComments] = useState([]);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${articleId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [articleId]);

    const handleAdd = (comment) => setComments([...comments, comment]);
    const handleUpdate = (updated) => setComments(comments.map(c => c.id === updated.id ? updated : c));
    const handleDelete = (id) => setComments(comments.filter(c => c.id !== id));

    return (
        <>
            {isLoggedIn && <New articleId={articleId} onAdd={handleAdd} />}
            <List commentDtos={comments} onUpdate={handleUpdate} onDelete={handleDelete} />
        </>
    );
}

export default Comments;