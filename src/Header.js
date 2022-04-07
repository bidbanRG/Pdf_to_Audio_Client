import React from 'react'
import {useState,useEffect} from 'react';
import './style.css';
export default function Header(){
   const [ShadowColor, setShadowColor] = useState("white");
    const h1style = {
        textShadow : `2px 2px 6px ${ShadowColor}`,
        transition: "text-shadow 2s"
    };
    const setshadow = ()=>{
      if(ShadowColor === "white") setShadowColor("red");
      else setShadowColor("white");
    }
    useEffect( ()=>{
          setTimeout(setshadow,1000);
          console.log("Hello!!");
         return ()=>{
            clearTimeout(setshadow,1000);
         }
    },[ShadowColor]);
    
      

    return(
      <header className = "header"> 
           <h1 style = {h1style}> WebAPP </h1>  
        <div className = "search-box">
        <i class="material-icons">search</i>
          <input type = "text"/> 
        </div>   
            
      </header>
    )
}
