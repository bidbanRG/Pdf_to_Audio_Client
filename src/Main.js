import './App.css';
import LeftsideBar from './LeftsideBar'
import Content from './Content'
import RightsideBar from './RightsideBar'

function Main() {
  return (
       <div className = "main">
        <LeftsideBar/>
         <Content/>
         <RightsideBar/>
       </div>
    );
}

export default Main;