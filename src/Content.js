import './App.css';
import {useState,useRef,useEffect} from 'react';
// import { useSpeechSynthesis } from "react-speech-kit";
// import { useSpeechRecognition } from 'react-speech-kit';
  import Speech from 'react-speech';
import axios from "axios"; 

function Content() {
     
   
  // const { speak } = useSpeechSynthesis();
    const username = useRef();
    const [CharIndex,setCharIndex] = useState(0);
    const [PrevCharIndex,setPrevCharIndex] = useState(0);
    const [Rate, setRate] = useState(6);
   const [pdf,setpdf] = useState(null);
    const [Text,setText] = useState(null);
     
   

    let utt = new SpeechSynthesisUtterance(Text);
  

 
     utt.addEventListener('boundary' ,(e) => {
          setCharIndex(e.charIndex)
           console.log(e.charIndex)
     });
   
 

     
   
    console.log(CharIndex);
    const play = () => {
    
      if(speechSynthesis.paused || speechSynthesis.speaking)
         return speechSynthesis.resume();


           if(PrevCharIndex === 0) utt.text = Text;
           utt.rate = 1;
           speechSynthesis.speak(utt);
          
        
       
    }
    const pause = () => {
      if(speechSynthesis.speaking) speechSynthesis.pause();
    }

   const stop = () => {
      speechSynthesis.resume();
      speechSynthesis.cancel();
   }






 const speed = (rate) => {

   

     stop();

    // setCopy(Text.substring( PrevCharIndex  + CharIndex));
     console.log('charIndex',CharIndex);
  
    console.log('PrevCharIndex',PrevCharIndex);
    utt.text = Text.substring( PrevCharIndex  + CharIndex);
    setPrevCharIndex(PrevCharIndex + CharIndex);
    setRate(rate);
      
     play();
 }
  


  return (
    <div className = "content">
         <h2> content </h2>
        <h3 > Share your words </h3>
          
    
  
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
            <div onClick = {play}> 
            play
          </div>
           <div onClick = {pause}> pause </div>
            <div onClick = {stop}> stop </div>
           
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