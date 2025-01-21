import ArticlesList from "../components/ArticlesList"
import useArticles from "../hooks/articles"
const ArticlesListPage = () =>{ 
    const {articles, loading} = useArticles();
    if (loading) return <p>Loading...</p>;
    return (
        <>
        <ArticlesList articles={articles}/>
        </>
    )
}
export default ArticlesListPage;