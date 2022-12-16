import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import '../styles/workpage.css'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'


function DataFetching(props) {
    const [posts, setPosts] = useState([])
    const [filteredlist, setFilteredList]=useState([])
    const [filterState,setFilterState]=useState("all");
    gsap.registerPlugin(ScrollTrigger)

    /*Data ophalen*/ 
    useEffect(()=>{
        
       axios.get('http://localhost:1337/api/Projects?populate=*')
       .then(res=>{
        res.data.data.map(post=>
            (console.log(post.attributes.link !==null)
            ))
        setPosts(res.data.data)
        setFilteredList(res.data.data)
       })
       .catch(err=>{
        console.log("error! " + err)
       })
    },[])

    /*Scroll animatie*/ 
    const workTitle = useRef(null);
    useEffect(() => {
        gsap.to("#workTitle", {
          x: -100,
          duration: 50,
          scrollTrigger: {
            trigger: "#workTitle",
            //markers: true,
            start: "top center",
            end: "bottom 80px",
            scrub: true
          }
        });
      }, []);

      /*Filteren*/ 
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

    const handleClick = event => {
        // 👇️ toggle class on click
        console.log(event.target)
        event.currentTarget.classList.remove('activeItem');
        event.target.classList.toggle('activeItem');
        //event.target.classList.toggle('activeItem');
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
      };

    /*Checken indien er een link in de DB staat*/ 
    function showLink(link){
        if(link!==null){
           return <p><a className='worksLinks' href={link}>Visit the website</a></p>
        }
        return null
    }

    return (
        <div >
           <p ref={workTitle} id="workTitle" className="subtitle">My work</p>
           <div onClick={handleClick} id="navigatieWork">
            <p onClick={() => showData('all')} className="navItem">All</p>
            <p onClick={() => showData('graphicdesign')} className="navItem">Graphicdesign</p>
            <p onClick={() => showData('webdesign')}  className="navItem">Webdesign</p>
            <p onClick={() => showData('videodesign')}  className="navItem">Videodesign</p>
          </div>
            <div id="workContainer">
                {filteredlist.map((post)=>(
                    <div className="worksPost" id={`id${post.id}`} key={post.id} style={{ 
                        backgroundImage: `url("http://localhost:1337${post.attributes.image.data.attributes.url}")` 
                      }}>
                        <p  className='worksTitles'>{post.attributes.Title}</p>
                        <p  className='worksDescriptions'>{post.attributes.description}</p>
                        
                        {showLink(post.attributes.link)}
                    </div>
                    ))}
            </div>
        </div>
    );
}

export default DataFetching;

/*

Oorspronkelijke code

<div id="workContainer">
                {filteredlist.map((post)=>(
                    <div className="worksPost" id={`id${post.id}`} key={post.id}>
                        <p  className='worksTitles'>{post.attributes.Title}</p>
                        <p  className='worksDescriptions'>{post.attributes.description}</p>
                        <img className='worksImages' src={`http://localhost:1337${post.attributes.image.data.attributes.url}`} ></img>
                        {showLink(post.attributes.link)}
                    </div>
                    ))}
            </div>

*/