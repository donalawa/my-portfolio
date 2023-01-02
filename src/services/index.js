import { collection, collectionGroup, doc, DocumentData, getDoc, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';

import { db } from "../firebase/firebase-config";


const fetchProjects = () => {
    try {
        return getDocs(collection(db, 'projects'));
    } catch (error) {
        console.log("Error getting data");
        console.log(error);
    }
}   


export {
    fetchProjects
}