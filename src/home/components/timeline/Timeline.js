import React, {useState, useEffect} from 'react'
import Post from './Post'
import "./Timeline.css"
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"

function Timeline() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postData = collection(db, "posts")
    getDocs(postData).then((querySnapshot) => {
    setPosts(querySnapshot.docs.map((doc) => doc.data()))
  })
  console.log("mount")
  }, [])

  return (
    <div className="timeline">
        Timeline
        {posts.map((post) => (
          <Post
          // キーは仮置き
          key={post.text}
          displayName={post.displayName}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
        ))}
    </div>
  )
}

export default Timeline