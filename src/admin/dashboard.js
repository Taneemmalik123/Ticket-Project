     import { useState,useEffect } from "react";
     import swal from "sweetalert";
    
    const Mydashboard = () => {
     let [account,updateAccount]=useState([]);
     let[ticket,updateTicket]=useState([]);
        let[totalopen,updateTotalopen]=useState("loading");
        let[totalassign,updateTotalassign]=useState("loading")
        let[totalclose,updateTotalclose]=useState("loading")


        const admindashboard = () =>{
            let url = "https://cybotrix.com/webapi/api/dashboard";
            let userdata = {tokenno:localStorage.getItem("tokenno")};
            let postdata = {
                 headers:{'Content-Type':'application/json'},
                 method:'POST',
                 body:JSON.stringify(userdata)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(alldata=>{
            
                updateTotalopen(alldata.totalopen);
                updateTotalassign(alldata.totalassign);
                updateTotalclose(alldata.totalclose);
  })
         }

    const allTicket = () =>{
        let url = "https://cybotrix.com/webapi/api/allticket";
        let userdata = {tokenno:localStorage.getItem("tokenno")}
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(ticketArray=>{
             updateTicket(ticketArray.reverse());
        })
     }

     


    const allAccount = () =>{
        let url = "https://cybotrix.com/webapi/api/allaccount";
        let userdata = {tokenno:localStorage.getItem("tokenno")};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(accountArray=>{
         updateAccount(accountArray.reverse());
        })
    }

     useEffect(()=>{
        allTicket();
        allAccount();
        admindashboard();
     },[]);
   
   
     return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 ">
                    <h1 className="text-center"><i className="text-primary"></i> Dashboard</h1>
                </div>
                
                <div className="col-lg-3 mt-4 text-center p-1 mb-4 mt-5">
                    <i className="fa fa-ticket fa-3x text-warning mb-3"></i>
                    <h3> Total Ticket : {ticket.length} <br /> </h3>
                </div>

                <div className="col-lg-3 mt-4 text-center p-1 mb-4 mt-5">
                    <i className="fa fa-home fa-3x text-info mb-3"></i>
                    <h3> Total Account : {account.length} <br /> </h3>
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