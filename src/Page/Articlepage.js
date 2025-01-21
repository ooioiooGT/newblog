import { useParams } from "react-router-dom";
import useArticle from "../hooks/article";

const ArticlePage = () => {
    const { articleId } = useParams();
    const {article, loading }= useArticle(articleId);

    if (loading) return <p> Loading ... </p>


    return (
        <div>
            <h1>{article.title}</h1>
            <div className="like-section">
                <button>Like</button>
                <p>{article.likes}</p>
            </div>
            <p>{article.content}</p> 
            <h2>Comments:</h2>       
        </div>
    );
};

export default ArticlePage;
