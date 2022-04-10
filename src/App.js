
import './App.css';
import {useState} from 'react';


import Content from './Content'

function App() {
  const [check,setcheck] = useState(0);
  return (
   <> 
     <Content/>
   </>
  );
}

export default App;
