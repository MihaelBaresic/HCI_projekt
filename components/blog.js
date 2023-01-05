import styles from '../styles/Home.module.css'
import { useContext, useEffect, useState } from 'react';
import Spinner from './Spinner';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    // Load posts from a local file
    const loadPosts =  () => {
      try {
        const posts = require('../constants/blog.json');
        setTimeout(() => {
          setPosts(posts);
          setIsLoading(false);
          console.log(posts);
        }, 1500)
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, [setPosts]);

  if (isLoading) {
    return <p className={styles.loader_spinic}><div className={styles.loader_txt}></div> <Spinner /></p>;
  }

  return(
  <section className={styles.container}>
    <h1 className={styles.shop_h1}>Blog</h1>
    <div className={styles.blog_grid_pos}>
      <div className={styles.grid}> 
        {posts.map((post) => (
        <div key={post.id} className={`${styles.shop_img_holdercina}`}>
        <div key={post.id}>
        <div className={`${styles.shop_img_holder}`}>
          <div className={styles.shop_img_picture}>
            <img src={post.imageUrl} alt={post.name}  width='100%'/>
          </div>  
        </div> 

        <div className={styles.blog_element_txt}>
          <h3>{post.name}</h3>
          <p>{post.date}</p>
        <div className={styles.btn_blog_pos}>
          <p>{post.description}</p>
          <div className={styles.blog_readmore}>
          {!expanded[post.id] && (
            <button className={styles.cta__full2} onClick={() => setExpanded({ ...expanded, [post.id]: true })}>
              Read More
            </button>
          )}         
          {expanded[post.id] && (
            <div>
              <p>{post.fullDescription}</p>
              <div className={styles.blog_readmore}>
                <button className={styles.cta__full2} onClick={() => setExpanded({ ...expanded, [post.id]: false })}>
                  Show Less
                </button>
              </div>
            </div>
          )}
          </div>
          </div>
            </div> 
        </div> 
      </div>
      ))} 
    </div>
    </div>
  </section>
  );
}
export default Blog;