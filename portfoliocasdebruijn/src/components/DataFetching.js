import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetching(props) {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        
       axios.get('http://localhost:1337/api/Projects')
       .then(res=>{
        //res.data.data.map(post=>(console.log(post.attributes.Title)))
        setPosts(res.data.data)
       })
       .catch(err=>{
        console.log("error! " + err)
       })
    },[])
    return (
        <div>
            <p>Fetch!</p>
                {posts.map((post)=>(
                     <li key={post.id}>{post.attributes.Title}</li>
                ))}
        </div>
    );
}

export default DataFetching;