import {  doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../index"; 

const useArticle = (articleId) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const docSnapshot = await getDoc(doc(db, "articles", articleId));
                if (docSnapshot.exists()) {
                    setArticle (docSnapshot.data())
                }else{
                    console.log("Do not have this article!")
                    setArticle(null);
                }
            } catch (error) {
                console.error("Error fetching articles: ", error);
            }setLoading(false);
        };
        if (articleId){
            fetchArticle(); 
        }
    }, [articleId]); 

    return {article, loading }; 
};

export default useArticle;
