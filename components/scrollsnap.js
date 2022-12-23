import { useRef, useEffect } from 'react'
import { css } from 'styled-jsx/css'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
  }
  .first_element{
    padding-left: 24px;
  }
  .intro__olive{
    border-radius: 12px;
    box-shadow: 5px 4px 30px 10px rgb(0 0 0 / 10%);
    height: 480px;
    position: relative;
  }
  .olive__image{
   height: 400px;  
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
    Font family: ABeeZee
    Font style: Regular
    Font size: 16px
    Line height: 20px
    Line height: 125%
    Align: Left
    Vertical align: Top
  }

`

function MyComponent() {
  const containerRef = useRef(null)

  function handleClick(direction) {
    const elementWidth = 360
    const currentScrollPosition = containerRef.current.scrollLeft
    const scrollPosition =
      direction === 'next'
        ? currentScrollPosition + elementWidth
        : currentScrollPosition - elementWidth
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
  }

  return (
    <div className="container">
    <style jsx>{styles}</style>
    <div>
      <IconButton sx={{backgroundColor:'white', boxShadow:'5px 4px 30px 10px rgb(0 0 0 / 10%)'}} onClick={() => handleClick('prev')}>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton sx={{backgroundColor:'white',marginLeft:'5px', boxShadow:'5px 4px 30px 10px rgb(0 0 0 / 10%)'}} onClick={() => handleClick('next')}>
        <ChevronRightIcon />
      </IconButton>
    </div> 
    <div className="container_new" ref={containerRef}>  
     <div className="intro__olive_holder first_element">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div>  
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div>   
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div> 
    <div className="intro__olive_holder">
      <div className="intro__olive">      
        <img className="olive__image" src="/olive-black.svg" width="360px;"/>
      </div>
      <h3 className="object_txt">Olive oil</h3>
      <h4 className="object_price">10€</h4>
    </div> 
    </div>
    </div>
  )
}
 
export default MyComponent;