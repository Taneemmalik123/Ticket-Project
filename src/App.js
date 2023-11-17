import './App.css';
import Myadminapp from './admin/adminapp';


function App() {
  
    if(localStorage.getItem("type")=="ADMIN")
    {
      return(<Myadminapp/>)
    }
    
    if(localStorage.getItem("type")=="SUPPORT")
    {
      return (<Mysupportapp/>) 
    }
  
}

export default App;
