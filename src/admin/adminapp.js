import { HashRouter,Routes, Route } from "react-router-dom";
import Myheader from "./header";
import Mydashboard from "./dashboard";
import Myaccount from "./account";
import Myticket from "./tickets";
import NewAccount from "./newaccount";


const Myadminapp = () =>{
return(
    
    <HashRouter>
        <Myheader/>
        <Routes>
            <Route exact path="/" element={<Mydashboard/>}/>
            <Route exact path="/account" element={<Myaccount/>}/>
            <Route exact path="/ticket" element={<Myticket/>}/>
            <Route exact path="/newaccount" element={<NewAccount/>}/>

        </Routes>
    </HashRouter>
)
}


export default Myadminapp;

