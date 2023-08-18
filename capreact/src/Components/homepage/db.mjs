import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyD5dsHW-qXjyWZnV3dAv_5ba4R6DEsegu4",
            authDomain: "cap1-da4a1.firebaseapp.com",
            projectId: "cap1-da4a1",
            storageBucket: "cap1-da4a1.appspot.com",
            messagingSenderId: "500892811958",
            appId: "1:500892811958:web:7a7dd364d89d75a3179c17"
        };

        const app = initializeApp(firebaseConfig)
        db = getFirestore(app)
    }
    return db
}
export {getDb};