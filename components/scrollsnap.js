import { useRef, useEffect, useState } from 'react'
import { css } from 'styled-jsx/css'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import Spinner from './Spinner';

const styles = css`
  .container{
    padding-left: 76px; 
  }
  .container_new {
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: hidden;    
  }
  .container_new > div {
    scroll-snap-align: start;
  }
  .intro__olive_holder{
    margin-left: 24px;
    padding-top: 24px;
    position: relative;
    scroll-snap-align: center;
    display: inline-block;
    margin-bottom: 80px;
  }
  .first_element{
    padding-left: 24px;
  }
  .intro__olive{
    border-radius: 12px;
    box-shadow: 5px 4px 30px 10px rgb(0 0 0 / 10%);
    height: 480px;
    position: relative;
    margin-left: 20px;
  }
  .olive__image{
   height: 400px; 
   border-radius: 10px 10px 0px 0px; 
   cursor: pointer;
  }
  .object_txt{
    Font family: ABeeZee
    Font style: Regular
    Font size: 25px
    Line height: 31px
    Line height: 125%
    Align: Left
    Vertical align: Top
  }
  .object_price{
    color: #666666;
    Font family: ABeeZee;
    Font style: Regular;
    font-size: 18px;
    Line height: 20px;
    Line height: 125%;
    Align: Left;
    Vertical align: Top;
  }
  .btn__custom{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 24px;
  }
  .srcroll_snap_txt{
    margin-left: 20px;
    Font family: 'ABeeZee';
    Font style: Regular;
    font-size: 18px;
    Line height: 20px;
    Line height: 125%;
  }
  @media screen and (max-width: 500px){
    .container{
      padding-left: 30px; 
    }
  }
`

function MyComponent() {
  const containerRef = useRef(null)
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleClick(direction) {
    const elementWidth = 360;
    const currentScrollPosition = containerRef.current.scrollLeft;
    const scrollPosition =
      direction === 'next'
        ? currentScrollPosition + elementWidth
        : currentScrollPosition - elementWidth
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Load posts from a local file
    const loadPosts =  () => {
      try {
        const posts = require('../constants/blog.json');
        setTimeout(() => {
          setPosts(posts);
          setIsLoading(false);
          console.log(posts);
        }, 5)
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, [setPosts]);

  // Shuffle the posts array so that we get a random selection of posts
  const shuffledPosts = posts.sort(() => Math.random() - 0.5);

  // Select the first five posts from the shuffled array
  const selectedPosts = shuffledPosts.slice(0, 6);

  if (isLoading) {
    return <p className={styles.loader_spinic}><div className={styles.loader_txt}></div> <Spinner /></p>;
  }

  return (
    <div className="container">
    <style jsx>{styles}</style>
    <div className="btn__custom">
      <IconButton sx={{backgroundColor:'white', boxShadow:'5px 4px 30px 10px rgb(0 0 0 / 20%)', height:'60px', width:'60px'}} onClick={() => handleClick('prev')}>
        <ChevronLeftIcon fontSize='large' />
      </IconButton>
      <IconButton sx={{backgroundColor:'white',marginLeft:'5px', boxShadow:'5px 4px 30px 10px rgb(0 0 0 / 20%)', height:'60px', width:'60px'}} onClick={() => handleClick('next')}>
        <ChevronRightIcon fontSize='large' />
      </IconButton>
    </div> 
    <div className="container_new" ref={containerRef}>  
    {selectedPosts.map((post) => (
        <Link href="/blog" legacyBehavior key={post.id}>
          <div className="intro__olive_holder">
            <div className="intro__olive">
              <img className="olive__image" src={post.imageUrl} alt={post.name} />
              <p className='srcroll_snap_txt'>{post.name}</p>
            </div>
          </div>
        </Link>
      ))}
    {/* <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>    
    </div>   
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>     
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>   
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>      
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>    
    </div>  */}
    </div>
    </div>
  )
}
 
export default MyComponent;