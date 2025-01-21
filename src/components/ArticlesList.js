import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
    
    return (
        <>
        <h1>Articles</h1>

        {articles.map(articles => (
            <Link key={articles.id} className="article-list-item" to={`/articles/${articles.id}`}>
                <h3> {articles.title}</h3>
                <p>{articles.content.substring(0,150)}...</p>
            </Link>
        ) )}
        </>
    )
}   
export default ArticlesList;