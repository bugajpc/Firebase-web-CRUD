import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config"
import { useState } from "react";

export default function AddPost() {
    const [userContent, setUserContent] = useState<string>("")
      const handleAddData = async () => {
        const docRef = await addDoc(collection(db, "posts"), {
          title: "Title",
          content: userContent
        });
        console.log("Document written with ID: ", docRef.id);
      }
      return (
        <>
          <input type='text' placeholder='Content' value={userContent} onChange={(e) => setUserContent(e.target.value)}></input>
          <button onClick={handleAddData}>Add</button>
        </>
      )
}