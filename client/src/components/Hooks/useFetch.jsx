import React , {useEffect , useState} from "react";
import { db } from "../../config/firebase-config";
import { collection, getFirestore, onSnapshot, query } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const useFetch = (collectionName) => {
    const [data, setData] = useState("");
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        const getData = () => {
            const postRef = query(collection(getFirestore() , collectionName ));
            onSnapshot(postRef , (snapshot) => {
                setData(snapshot.docs.map((doc) => ({
                    ...doc.data() ,
                    id : doc.id ,
                })));
                setLoading(false)
            })
        }
        getData();
    } , []);
    return {
        data , loading
    }
}

export default useFetch ;

