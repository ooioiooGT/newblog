import ArticlesList from "../components/ArticlesList"
import useArticles from "../hooks/articles"
const ArticlesListPage = () =>{ 
    return (
        <>
        <ArticlesList articles={useArticles()}/>
        </>
    )
}
export default ArticlesListPage;