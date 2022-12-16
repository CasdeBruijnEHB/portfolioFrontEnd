import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import '../styles/workpage.css'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css';


function DataFetching(props) {
    const [posts, setPosts] = useState([])
    const [filteredlist, setFilteredList]=useState([])
    const [filterState,setFilterState]=useState("all");
    gsap.registerPlugin(ScrollTrigger)

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        AOS.init();
      }, [])

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
    /*
    useEffect(() => {
        gsap.to("#workTitle", {
          x: -100,
          duration: 50,
          scrollTrigger: {
            trigger: "#workTitle",
            //markers: true,
            start: "top bottom",
            end: "bottom 80px",
            scrub: true
          }
        });
      }, []);
      */

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

    function handleClick(e){
        // 👇️ toggle class on click
        //console.log(e.target)
        let navItems=document.getElementsByClassName("navItem");
        //console.log(navItems.length)
        for(let i=0; i< navItems.length;i++){
            navItems[i].classList.remove("activeItem")
        }
        
        e.target.classList.toggle('activeItem');


        //event.target.classList.toggle('activeItem');
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
    }
    /*
    const handleClick = event => {
        // 👇️ toggle class on click
        console.log(event.target)
        let navItems=document.getElementsByClassName("navItem");
        console.log(navItems.length)
        for(let i=0; i< navItems.length;i++){
            navItems[i].classList.remove("activeItem")
        }
        
        event.target.classList.toggle('activeItem');
        //event.target.classList.toggle('activeItem');
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
      };
      */
    /*Checken indien er een link in de DB staat*/ 

    function showLink(link,category){
        console.log(category)
        if(link!==null){
            if(category==='Videodesign'){
                return <div  className='workLinkDiv'><p><a className='worksLinks' href={link}>Watch the video</a></p></div>
            }else{
                return <div className='workLinkDiv'><p><a className='worksLinks' href={link}>Visit the website</a></p></div>
            }
        }
        return null
    }
    
    function funHover(e){
        //console.log("hover!!!!")
        //console.log(e._reactName)
        try {
            if(e._reactName==="onMouseOver"){
                
                    e.target.getElementsByTagName('div')[0].style.visibility="visible"
                
            }else if(e._reactName==="onMouseOut"){
                e.target.getElementsByTagName('div')[0].style.visibility="hidden"
            }
        } catch (error) {    
        }
    }

    function hoverInside(e){
        //console.log("hover!!!!")
        //console.log(e.target)
        e.target.style.visibility="visible"
        try {
            if(e._reactName==="onMouseOver"){
                
                e.target.style.visibility="visible"
                
            }else if(e._reactName==="onMouseOut"){
                e.target.style.visibility="hidden"
            }
        } catch (error) {    
        }
    }

    function funClickLink(e, link){
        console.log("Click!")
        console.log(e)
        console.log(link)
        if(link!==null){
            window.open(link, '_blank', 'noopener,noreferrer')
        }
        
    }
    /*
    const funHover = (e) => {
        console.log("hover!!!")
        
      };
    */
    return (
        <div  >
           <p ref={workTitle} id="workTitle" className="subtitle">My work</p>
           <div id="navigatieWork">
            <p onClick={(event) => { showData('all'); handleClick(event)}} className="navItem activeItem">All</p>
            <p onClick={(event) => { showData('graphicdesign'); handleClick(event)}} className="navItem">Graphicdesign</p>
            <p onClick={(event) => { showData('webdesign'); handleClick(event)}}  className="navItem">Webdesign</p>
            <p  onClick={(event) => { showData('videodesign'); handleClick(event)}} className="navItem">Videodesign</p>
          </div>
            <div id="workContainer" data-aos="fade-up" data-aos-anchor-placement="top-middle">

            
                { filteredlist.map((post)=>(
                    <div onClick={(event)=>funClickLink(event,post.attributes.link)}  onMouseOver={(event)=>funHover(event)} onMouseOut={(event)=>funHover(event)} className="worksPost" id={`id${post.id}`} key={post.id} style={{ 
                        backgroundImage: `url("http://localhost:1337${post.attributes.image.data.attributes.url}")` 
                      }}>
                        <div onMouseOver={(event)=>hoverInside(event)}  onMouseOut={(event)=>hoverInside(event)} style={{visibility:"hidden"}}  id={`container${post.id}`}>
                        <p  className='worksTitles'>{post.attributes.Title}</p>
                        <p  className='worksDescriptions'>{post.attributes.description}</p>
                        
                        </div>
                        {showLink(post.attributes.link,post.attributes.category)}
                        
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