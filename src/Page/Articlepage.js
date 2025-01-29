import { useNavigate, useParams } from "react-router-dom";
import useArticle from "../hooks/article";
import useUser from "../hooks/useUser";
import CommentFrom from "../components/CommentFrom";
import useComments from "../hooks/getComments";
import heart from "../asset/heart.png"
import red_heart from "../asset/red heart.png";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../index";


const ArticlePage = () => {
    const { articleId } = useParams();
    const {user} = useUser();
    const navigate = useNavigate();
    const { article, loading: articleLoading } = useArticle(articleId);
    const { comments, loading: commentsLoading, refreshComments  } = useComments(articleId);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setlikes] = useState(0);

    useEffect(() =>{
        if (article && article.likes !== undefined) {
            setlikes(article.likes);
        }
    },[article])

    if (articleLoading || commentsLoading) return <p> Loading ... </p>
    const handleNewComment = () => {
        refreshComments();
    };
    const liked = async() => {
        const newLikes = article.likes + 1;
        console.log(likes)
        await updateDoc(doc(db , "articles", articleId), {likes: newLikes})
        setlikes(newLikes)
        setIsLiked(!isLiked); // Toggle the like state
    };

    return (
        <div>
            <h1>{article.title}</h1>
            <div className="like-section">
                <img  
                    src={isLiked ? red_heart : heart} 
                    alt={isLiked ? "Red Heart" : "White Heart"} 
                    style={{ width: "24px", height: "24px" }}
                    onClick={liked}
                />
                <p>{likes}</p>
            </div>
            <p>{article.content}</p> 
            {user 
                ? <CommentFrom articleId={articleId} onCommentAdded={handleNewComment}/>
                :<button onClick={()=>navigate("/login")}>Log in to add a comment</button>}
            <h2>Comments:</h2> 
            {comments.map((comment, index) =>
                <div className="comment" key={index}>
                    <p><strong>{comment.username}</strong>  {comment.time}</p>
                    <div className="content">
                        <p>{comment.comment}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ArticlePage;
