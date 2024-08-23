import { collection, getFirestore, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import { getDatabase } from "firebase/database";

const useSingleFetch = (collectionName, id, subCol) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSingleData = () => {
      if (id) {
        const postRef = query(collection(getFirestore(), collectionName, id, subCol));
        onSnapshot(postRef, (snapshot) => {
          setData(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          setLoading(false);
        });
      }
    };
    getSingleData();
  }, [db, id]);
  return {
    data,
    loading,
  };
};

export default useSingleFetch;
