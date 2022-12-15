import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../styles/workpage.css'





function DataFetching(props) {
    const [posts, setPosts] = useState([])
    const [filteredlist, setFilteredList]=useState([])
    const [filterState,setFilterState]=useState("all");

    useEffect(()=>{
        
       axios.get('http://localhost:1337/api/Projects?populate=*')
       .then(res=>{
        //res.data.data.map(post=>(console.log(post.attributes.image.data.attributes.url)))
        setPosts(res.data.data)
        setFilteredList(res.data.data)
       })
       .catch(err=>{
        console.log("error! " + err)
       })
    },[])

    function showData(type){
        if(type==="all"){
            console.log("all!")
            setFilteredList(posts);
        }else if(type==="graphicdesign"){
            console.log("graphicdesign!")

        const filtered = posts.filter(post => {
            return post.attributes.category === 'Graphicdesign';
         });
         setFilteredList(filtered);

        }else if(type==="webdesign"){
            console.log("webdesign!")

            const filtered = posts.filter(post => {
                return post.attributes.category === 'Webdesign';
             });
             setFilteredList(filtered);
        }else if(type==="videodesign"){
            console.log("videodesign!")
            const filtered = posts.filter(post => {
                return post.attributes.category === 'Videodesign';
             });
             setFilteredList(filtered);
        }else{
            console.log("all!")
            setFilteredList(posts);
        }
    }

    return (
        <div className="fullPage">
           <p id="workTitle" className="subtitle">My work</p>
           <div id="navigatieWork">
            <p onClick={() => showData('all')} className="navItem">All</p>
            <p onClick={() => showData('graphicdesign')} className="navItem">Graphicdesign</p>
            <p onClick={() => showData('webdesign')}  className="navItem">Webdesign</p>
            <p onClick={() => showData('videodesign')}  className="navItem">Videodesign</p>
          </div>
            <div id="workContainer">
                {filteredlist.map((post)=>(
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