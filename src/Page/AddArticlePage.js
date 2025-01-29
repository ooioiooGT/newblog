import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../index";
import useUser from "../hooks/useUser";

const AddArticlePage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const adminEmail = "123456@gmail.com"; // Replace with your actual admin email

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddArticle = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Title and Content are required");
            return;
        }
        try {
            await addDoc(collection(db, "articles"), {
                title,
                likes: 0,
                content,
                author: user.email,
                timestamp: serverTimestamp(),
            });
            navigate('/articles');
        } catch (error) {
            console.error("Error adding article:", error);
        }
    };

    if (!user || user.email !== adminEmail) {
        return <h2>Access Denied. Only the admin can add articles.</h2>;
    }

    return (
        <div>
            <h1>Add New Article</h1>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Content:</label>
            <textarea rows="6"  value={content} onChange={(e) => setContent(e.target.value)} />

            <button onClick={handleAddArticle}>Add Article</button>
        </div>
    );
};

export default AddArticlePage;
