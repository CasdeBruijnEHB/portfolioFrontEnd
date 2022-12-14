import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../styles/workpage.css'

function DataFetching(props) {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        
       axios.get('http://localhost:1337/api/Projects?populate=*')
       .then(res=>{
        res.data.data.map(post=>(console.log(post.attributes.image.data.attributes.url)))
        setPosts(res.data.data)
       })
       .catch(err=>{
        console.log("error! " + err)
       })
    },[])
    return (
        <div className="fullPage">
            <p>Fetch!</p>
            <div id="workContainer">
                {posts.map((post)=>(
                    <div className="worksPost" id={`id${post.id}`} key={post.id}>
                        <p  className='worksTitles'>{post.attributes.Title}</p>
                        <p  className='worksDescriptions'>{post.attributes.description}</p>
                        <img className='worksImages' src={`http://localhost:1337${post.attributes.image.data.attributes.url}`} ></img>
                        <p><a className='worksLinks' href={post.attributes.link}>Visit the website</a></p>
                    </div>
                    ))}
            </div>
               
        </div>
    );
}

export default DataFetching;