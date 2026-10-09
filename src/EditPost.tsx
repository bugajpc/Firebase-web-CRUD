import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { updateDoc } from "firebase/firestore";
export default function EditPost() {
    const [userContent, setUserContent] = useState<string>("")
    const [userTitle, setUserTitle] = useState<string>("")

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const docRef = doc(db, "posts", id as string | "");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserContent(docSnap.data().content)
            setUserTitle(docSnap.data().title)
        } else {
            console.log("No such document!");
        }
    }

    const handleUpdate = async () => {
        const washingtonRef = doc(db, "posts", id as string);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            title: userTitle,
            content: userContent
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <>
            <input type='text' placeholder='Title' value={userTitle} onChange={(e) => setUserTitle(e.target.value)}></input>
            <input type='text' placeholder='Content' value={userContent} onChange={(e) => setUserContent(e.target.value)}></input>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}