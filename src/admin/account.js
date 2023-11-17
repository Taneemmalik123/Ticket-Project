import { useState,useEffect } from "react";
import swal from "sweetalert";

const Myaccount= () =>{
    let [account,updateAccount]=useState([]);

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
        allAccount();
     },[1]);


     return(
       <div className="container">
        <div className="row">
            <div className="col-lg-12 my-5">
                
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th> Ticket No </th>
                    <th> Name </th>
                    <th> Email Id </th>
                    </tr>
                </thead>
                <tbody>
               {
                account.map((account,index)=>{
                    return(
                        <tr key={index}>
                            <td>{account.userid}</td>
                            <td>{account.fullname}</td>
                            <td>{account.email}</td>
                            
                        </tr>
                    )
                })

}
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
        
       

            
    
     )
     

}

export default Myaccount;