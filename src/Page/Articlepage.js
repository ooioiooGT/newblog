import { useNavigate, useParams } from "react-router-dom";
import useArticle from "../hooks/article";
import useUser from "../hooks/useUser";
import CommentFrom from "../components/CommentFrom";


const ArticlePage = () => {
    const { articleId } = useParams();
    const {article, loading , comments}= useArticle(articleId);
    const {user} = useUser();
    const navigate = useNavigate();
    if (loading) return <p> Loading ... </p>

    return (
        <div>
            <h1>{article.title}</h1>
            <div className="like-section">
                <button>Like</button>
                <p>{article.likes}</p>
            </div>
            <p>{article.content}</p> 
            {user 
                ? <CommentFrom articleId={articleId}/>
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
