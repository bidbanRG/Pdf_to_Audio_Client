import './App.css';
import './style.css';
import {useState,useRef,useEffect} from 'react';
// import { useSpeechSynthesis } from "react-speech-kit";
// import { useSpeechRecognition } from 'react-speech-kit';
  import Speech from 'react-speech';
import axios from "axios"; 

export default function Content() {
     
   
  // const { speak } = useSpeechSynthesis();
    const username = useRef();
    const [CharIndex,setCharIndex] = useState(0);
    const [PrevCharIndex,setPrevCharIndex] = useState(0);
    const [Rate, setRate] = useState(6);
   const [Pdf,setPdf] = useState(null);
    const [Text,setText] = useState(null);
     const [loading,setloading] = useState(false);
   

    let utt = new SpeechSynthesisUtterance(Text);
  
   
 
     utt.addEventListener('boundary' ,(e) => {
          setCharIndex(e.charIndex)
           
     });
   
 

     
   
  
    const play = () => {
    
      if(speechSynthesis.paused || speechSynthesis.speaking)
         return speechSynthesis.resume();


           if(PrevCharIndex === 0) utt.text = Text;
           utt.rate = Rate / 10;
           speechSynthesis.speak(utt);
          
        
       
    }
    const pause = () => {
      if(speechSynthesis.speaking) speechSynthesis.pause();
    }

   const stop = () => {
      speechSynthesis.resume();
      speechSynthesis.cancel();
   }






 const speed = (e) => {

  

     stop();
   
    // setCopy(Text.substring( PrevCharIndex  + CharIndex));
 
    utt.text = Text.substring( PrevCharIndex  + CharIndex);
    setPrevCharIndex(PrevCharIndex + CharIndex);
    setRate(e.target.value);
      
     play();
 }
  
const getAudio = async () => {
   if(Pdf === null) return alert('No file choosen');
    if(!Pdf.type.includes('pdf')) {
       setPdf(null);
      return alert('file should be a pdf');
    }
               const formData = new FormData();
               formData.append('PDF', Pdf);
              
          try {
               setloading(true);
                const res = await axios.post('https://pdf-text-server.herokuapp.com/post', formData);
             
               setText(res.data.text);
               setloading (false);
               setPdf(null);
             }
             catch(error) {alert(error.message)}
    }

  return (
   <div>
        {loading && <Loader/>}    
      <div className = "app">
          <div className = "center">
          
            <div className = "pdf__input">
              <input className = "input" type = "file" onChange = {(e) => setPdf(e.target.files[0])}/>
           {Pdf ? "Pdf Selected" : "Select Pdf"}
            </div>
            {Text && 
               <div className = "btns1">
            <div className = "btns">
             <div className = "btn" onClick = {play}> play </div>
             <div className = "btn" onClick = {pause}> pause </div>
             <div className = "btn" onClick = {stop}> stop </div>
              </div>
              <div className = "speed1">
                    <div className = 'speed'> 
                <input type = 'range' onChange = {speed}  min = '1' max = '10' value = '6'/>
                </div>
                       <div className = 'oper'> 0.25 </div>
                       <div className = 'oper'> 0.75  </div>
                       <div className = 'oper'> 1    </div>
                       <div className = 'oper'> 1.25 </div>
                    
              </div>

            </div>}
            {Pdf && <div className = "get__audio" onClick = {getAudio}> Get Audio </div>}
          </div>
 
      
  </div>
    </div>
  
  );
}
 
function Loader(){
  return (
 <div className = "Load">   
  <div className = "Load1">
   <div className="middle">
  <div className="bar bar1"></div>
  <div className="bar bar2"></div>
  <div className="bar bar3"></div>
  <div className="bar bar4"></div>
  <div className="bar bar5"></div>
  <div className="bar bar6"></div>
  <div className="bar bar7"></div>
  <div className="bar bar8"></div>
</div>
</div>
</div>
  );
}  
 {/*<div className = "content">
      
          
    
  
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

  </div> */}