import { collection, collectionGroup, doc, DocumentData, addDoc, getDocs, setDoc, QuerySnapshot, where } from 'firebase/firestore';

import { db } from "../firebase/firebase-config";


const fetchProjects = () => {
    try {
        return getDocs(collection(db, 'projects'));
    } catch (error) {
        console.log("Error getting data");
        console.log(error);
    }
}   


const fetchContactInfo = () => {
    try {
        return getDocs(collection(db, 'contact-info'));
    } catch (error) {
        console.log("Error getting data");
        console.log(error);
    }
}

const fetchAboutInfo = () => {
    try {
        return getDocs(collection(db, 'about'));
    } catch (error) {
        console.log("Error getting data");
        console.log(error);
    }
}

const addContactInfo = (data) => {
    let docRef = doc(collection(db, "contacts"));
    
    return setDoc(docRef, data)
}


export {
    fetchProjects,
    fetchContactInfo,
    fetchAboutInfo,
    addContactInfo
}
