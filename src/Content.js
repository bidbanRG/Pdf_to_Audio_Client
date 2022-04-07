import './App.css';
import {useState,useRef,useEffect} from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { useSpeechRecognition } from 'react-speech-kit';

import axios from "axios"; 

function Content() {
    
    const [msg, setmsg] = useState([]);
    const [Ans,setAns] = useState({});
  const { speak } = useSpeechSynthesis();
    const username = useRef();
    const [value, setValue] = useState('');
      const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
      // useEffect(() =>{
      //   console.log('in');
      //     Axios.get("https://serverlkjhckl.herokuapp.com/input").then((response) => {
      //         setmsg(response.data);
      //         console.log(response.data);
      //     }).catch((err)=>{console.log(err)})},[]);  
      const [pdf,setpdf] = useState(null);
      const [Text,setText] = useState(null); 
  return (
    <div className = "content">
         <h2> content </h2>
        <h3 > Share your words </h3>
          
{/* <input ref = {username} placeholder = "Choose between 1 - 100..." />      
{/*<textarea ref = {texter} style = {textareastyles} placeholder = "comment..."/>
*/}    

{/*<button type = "submit" onClick = {()=>{
      const name = parseInt(username.current.value);
     
      username.current.value = "";

      axios.post("https://serverlkjhckl.herokuapp.com/send",{ name:name }).then((response) => {
        console.log(response.data);
            setAns(response.data)
       }).catch((err)=>{console.log(err)});
    }}> ADD </button>*/}
  
           <input type="file" onChange = {(e) => setpdf(e.target.files[0])}/>
           <button onClick = { async () => {
            if(pdf === null) return alert('No file choosen');
               const formData = new FormData();
               formData.append('PDF', pdf);
               console.log(pdf);
               try {
               const res = await axios.post('https://pdf-text-server.herokuapp.com/post', formData);
               console.log(res.data.text);
               setText(res.data.text);
             }catch(error) {alert(error.message)}
           }}> send </button>

           {Text ? 
            <div> 
              <button onClick = {() => speak({ text: Text })}> say </button>
              <button onClick = {stop}> stop </button>
              <button onClick = {listen}> listen </button> 
           </div>: <div> </div>}

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