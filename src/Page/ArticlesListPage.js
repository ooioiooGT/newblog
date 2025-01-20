import ArticlesList from "../components/ArticlesList"
import useArticles from "../hooks/articles"
const ArticlesListPage = () =>{ 
    console.log(useArticles())
    return (
        <>
        <ArticlesList articles={useArticles()}/>
        </>
    )
}
export default ArticlesListPage;