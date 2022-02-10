
import './App.css';
import {useState} from 'react';
import Header from './Header'
import Main from './Main'
import LeftsideBar from './LeftsideBar'
import Content from './Content'
import RightsideBar from './RightsideBar'
function App() {
  const [check,setcheck] = useState(0);
  return (
   <> 
      <Header/>
       <Main/>  
   </>
  );
}

export default App;
