import { useEffect, useState } from "react"
import { db, type Post } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        let tempList: Post[] = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let temp: Post = {
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content
            }
            tempList.push(temp)
        });
        setPosts(tempList)
    }

    const handleRemove = async (id: string) => {
        await deleteDoc(doc(db, "posts", id)).then(() => {
            let temp: Post[] = [...posts].filter((post: Post) => post.id != id)
            setPosts(temp)
        })
    }

    const handleEdit = (id: string) => {
        navigate("/edit-post/" + id)
    }

    return (
        <>
            {
                posts.map((post: Post, index: number) => (
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleRemove(post.id)}>x</button>
                        <button onClick={() => handleEdit(post.id)}>Edit</button>
                    </div>
                ))
            }
        </>
    )
}