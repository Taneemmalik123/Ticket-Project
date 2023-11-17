import { useState,useEffect } from "react";
import swal from "sweetalert";

const Mydashboard = () => {
let [account,updateAccount]=useState([]);
let[Allticket,updateAllticket]=useState([]);
   let[totalopen,updateTotalopen]=useState("loading");
   let[totalassign,updateTotalassign]=useState("loading")
   let[totalclose,updateTotalclose]=useState("loading")


   const MySupportdashboard = () =>{
       let url = "https://cybotrix.com/webapi/supportapi/mydashboard";
       let userdata = {tokenno:localStorage.getItem("tokenno")};
       let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(userdata)
       }
       fetch(url, postdata)
       .then(response=>response.json())
       .then(alldata=>{
       
           updateAllticket(alldata.allticket);
           updateTotalassign(alldata.totalassign);
           updateTotalclose(alldata.totalclose);
           updateTotalopen(alldata.totalopen)
})
    }

useEffect(()=>{
   MySupportdashboard();
},[1]);


return (
   <div className="container mt-4">
       <div className="row">
           <div className="col-lg-12 ">
               <h1 className="text-center"><i className="text-primary"></i> Dashboard</h1>
           </div>
           
           <div className="col-lg-3 mt-4 text-center p-1 mb-4 mt-5">
               <i className="fa fa-ticket fa-3x text-warning mb-3"></i>
               <h3> Total Ticket : {Allticket} <br /> </h3>
           </div>

           
           
           <div className="col-lg-3 mt-4 text-center p-1 mb-4 mt-5">
               <i className="fa fa-box fa-3x text-primary mb-3"></i>
               <h3> Total Open : {totalopen} <br /> </h3>
           </div>
           
           <div className="col-lg-3 mt-4 text-center p-1 mt-5">
               <i className="fa fa-suitcase fa-3x text-success mb-3"></i>
               <h3> Total Close : {totalclose} <br /> </h3>
           </div>
           
           <div className="col-lg-3 mt-4 text-center p-1 mt-5">
               <i className="fa fa-file fa-3x text-danger mb-3"></i>
               <h3> Total Assign : {totalassign} <br /> </h3>
           </div>
           
       </div>
   </div>


)
    }


export default Mydashboard;