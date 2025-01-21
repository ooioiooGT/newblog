import {  doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../index"; 

const useArticle = (articleId) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState(null);
    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const docSnapshot = await getDoc(doc(db, "articles", articleId));
                const queryComments = await getDocs(collection(db, "articles", articleId, "comments"))
                const docComments = queryComments.docs.map((doc)=>({
                    id: doc.id,
                    username: doc.data().username,
                    comment: doc.data().comment,
                    time:doc.data().time.toDate().toLocaleString()

                }))
                if (docSnapshot.exists()) {
                    setArticle (docSnapshot.data())
                    setComments(docComments)
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

    return {article, loading , comments}; 
};

export default useArticle;
