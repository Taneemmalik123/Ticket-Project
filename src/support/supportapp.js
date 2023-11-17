import { HashRouter,Routes,Route } from "react-router-dom";
import Mydashboard from "./dashboard";
import Myheader from "./header";
import Myticket from "./tickets";


const Mysupportapp=()=>{
    return(
        <HashRouter>
            <Myheader/>
            <Routes>
                <Route exact path="/" element={<Mydashboard/>}/>
                <Route exact path="/ticket" element={<Myticket/>}/>
            </Routes>
        </HashRouter>
    )
}


export default Mysupportapp;