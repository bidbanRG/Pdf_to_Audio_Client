import './App.css';
import {useState,useRef,useEffect} from 'react';
import Axios from "axios"; 

function Content() {
    
    const [AllUsers, setUser] = useState([]);
    const texter = useRef();
    const username = useRef();
    
      useEffect(() =>{
          Axios.get("http://localhost:3001").then((response) => {
              setUser(response.data);
          })},[AllUsers]);  
   
  return (
    <div className = "content">
         <h2> content </h2>
        <h3 > Share your words </h3>
       {   
             AllUsers.map((user) => {
                 return (
                  <div>
                    <h3> Name: {user.name} </h3>
                    <h4> Comment:  {user.comment} </h4>
                       <button> Delete </button>
                  </div>
                 );
             })
       }               
 <input ref = {username} placeholder = "Name..." />      
<textarea ref = {texter} style = {textareastyles} placeholder = "comment..."/>
    

<button type = "submit" onClick = {()=>{
      const name = username.current.value;
      const comment = texter.current.value;
      username.current.value = "";
      texter.current.value = "";
      Axios.post("http://localhost:3001/send",{
        name,
        comment,
      }).then((respose) => {alert("User created");});
    }}> ADD </button>
     
  </div>
  );
}
  
const Comments = (user) => {
  return(
    <div className = "card">
        <h3> {user.name} </h3>
        <h4>  {user.comment} </h4>
    </div>
  );
}
      export default Content;
      const textareastyles = {
          borderRadius: "10px",
          outline: "none",
          border:"node",
          width:"60%",
          marginBottom: "20px",
          width: "40%"
      };
     const btn  = {
         backgroundColor : "black",
         color : "red"
     }    