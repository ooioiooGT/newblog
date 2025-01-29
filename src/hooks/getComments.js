import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../index";

const useComments = (articleId) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    useEffect(() => {
        const fetchComments = async () => {
            if (!articleId) return; // Ensure articleId is provided

            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "articles", articleId, "comments"));

                const docComments = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    time: doc.data().time?.toDate().toLocaleDateString(), // Format date safely
                }));

                setComments(docComments);
            } catch (error) {
                console.error("Error fetching comments: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [articleId, reloadTrigger]);
    const refreshComments = () => setReloadTrigger((prev) => !prev);

    return { comments, loading, refreshComments };
};

export default useComments;
