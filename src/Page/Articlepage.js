import { useNavigate, useParams } from "react-router-dom";
import useArticle from "../hooks/article";
import useUser from "../hooks/useUser";
import CommentFrom from "../components/CommentFrom";
import useComments from "../hooks/getComments";


const ArticlePage = () => {
    const { articleId } = useParams();
    const {user} = useUser();
    const navigate = useNavigate();
    const { article, loading: articleLoading } = useArticle(articleId);
    const { comments, loading: commentsLoading, refreshComments  } = useComments(articleId);



    if (articleLoading || commentsLoading) return <p> Loading ... </p>
    const handleNewComment = () => {
        refreshComments();
    };

    return (
        <div>
            <h1>{article.title}</h1>
            <div className="like-section">
                <button>Like</button>
                <p>{article.likes}</p>
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
