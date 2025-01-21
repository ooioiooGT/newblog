import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../index"; 

const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "articles"));
                const fetchedArticles = querySnapshot.docs.map((doc) => ({
                    id: doc.id, 
                    title: doc.data().title,
                    content: doc.data().content,
                }));
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Error fetching articles: ", error);
            }
        };

        fetchArticles();
    }, []); 

    return articles; 
};

export default useArticles;
