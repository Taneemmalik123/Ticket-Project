import { useEffect, useState } from "react";
import swal from "sweetalert";

const Ticket = () => {

    let [ ticket , updateticket ] = useState([]);
    
    const allTicket = () =>{
        let url = "https://cybotrix.com/webapi/supportapi/myallticket";
        let userdata = {tokenno:localStorage.getItem("tokenno")};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(ticketArray=>{
         //  console.log(userdata);
          //  console.log(ticketArray);
            if(ticketArray.length>0){
                updateticket(ticketArray);
                pickdata(ticketArray[0]);
            }
            else{
                swal("warning", "Ticket Not Available","error");
            }
            
        })
    }
     
    useEffect(()=>{
        allTicket();
    },[1]);

    let [ alldata , pickdata ] = useState([]);
    const showdata = (ticketid) =>{           // can use tokenno also as tokenno and ticketId are unique like index
         pickdata(ticketid);
    }

    let [ statusdata , pickstatus ] = useState("");
    let [ commentdata , pickcomment ] = useState("");

    // for update
    const update = () =>{
        let url = "https://cybotrix.com/webapi/supportapi/changestatus";
        let userdata = {
        tokenno:localStorage.getItem("tokenno"),
        ticketid: alldata.id,
        statustype:statusdata,
        comment:commentdata

        };
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.text())
        .then(msg=>{
             alert(msg);
             //alert(alldata.id + " ####" + statusdata + "--- " + commentdata);
             console.log(alldata)
             allTicket();
             
        })
     }

    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-lg-6">

                    <div className="card border-0 shadow-lg ">
                        <div className="card-header text-white bg-primary text-center top">
                            <h4 className="text-center "> Available Tickets</h4>
                        </div>

                        <div className="card-body bg-muted top1">
                            <table className="table table-bordered mt-2 table-hover border-secondary">
                                <thead className="text-center" >
                                    <tr className="table-primary">
                                        <th> Token No </th>
                                        <th> Name </th>
                                        <th> Mobile </th>
                                        <th> Email </th>
                                        <th> Status </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        ticket.map((ticket, index) => {
                                            return (
                                                <tr key={index}
                                                    onClick={showdata.bind(this, ticket)}>
                                                    <td> {ticket.id} </td>
                                                    <td> {ticket.name} </td>
                                                    <td> {ticket.mobile} </td>
                                                    <td> {ticket.email} </td>
                                                    <td> {ticket.status} </td>
                                                </tr>
                                            )
                                        }
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-white bg-primary text-center top">
                            <h4 className="text-center"> Empty Blocks</h4>
                        </div>

                        <div className="card-body top1 ">
                            <table className="table table-bordered border-secondary table1 bg-light">
                                <tbody>
                                    <tr>
                                        <th className="table-primary"> ID : </th>
                                        <td> {alldata.id} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Name : </th>
                                        <td> {alldata.name} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Email: </th>
                                        <td> {alldata.email} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Mobile: </th>
                                        <td> {alldata.mobile} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Message: </th>
                                        <td> {alldata.message} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Problemtype: </th>
                                        <td> {alldata.problemtype} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Created on: </th>
                                        <td> {alldata.createdon} </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Assigned date: </th>
                                        <td> {alldata.assigndate}</td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary"> Comments : </th>
                                        <td >
                                            <textarea className="big" cols="50" placeholder="Enter the comments"
                                            value={commentdata} onChange={obj=>pickcomment(obj.target.value)}>
                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="table-primary fw-bold"> Status : </th>
                                        <td>
                                            <select onChange={obj => pickstatus(obj.target.value)} className="big">
                                                <option> Choose </option>
                                                <option>OPEN </option>
                                                <option> ASSIGN </option>
                                                <option> CLOSE</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <button className="btn bg-primary btn-center text-white btn sm mt-3" onClick={update}>
                                     Update 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;