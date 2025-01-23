import { useState } from "react";
import useUser from "../hooks/useUser";
import { addDoc, collection,   serverTimestamp } from "firebase/firestore";
import db from "../index";

const CommentFrom = ({articleId}) => { 
    const {user} = useUser();
    const [commentText, setCommentText] = useState('');
    const addComment = async () => { 
        try{
            await addDoc(collection(db, "articles", articleId , "comments"), 
                {username: user.email,
                comment: commentText.trim(),
                time: serverTimestamp(),
            })
            setCommentText('');
        }catch(error){
            console.log("Error adding comment:", error)
        }
    }

    return (
        <div className="comment-from">
            <h3>Add a comment</h3>
            {user && <p>You are posting as {user.email} </p>}
            <label>
            <textarea 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4" 
                cols="50" />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}
export default CommentFrom;