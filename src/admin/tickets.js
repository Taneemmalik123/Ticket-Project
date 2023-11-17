import { useEffect, useState } from "react";
import swal from "sweetalert";

const MyTicket = () => {
     let [ticket, updateTicket] = useState([]);
     let [mystatus, updateMystatus] = useState("");

     const allTicket = () => {
          let url = "https://cybotrix.com/webapi/api/allticket";
          let userdata = { tokenno: localStorage.getItem("tokenno"), status: mystatus };
          let postdata = {
               headers: { 'Content-Type': 'application/json' },
               method: 'POST',
               body: JSON.stringify(userdata)
          }
          fetch(url, postdata)
               .then(response => response.json())
               .then(ticketArray => {
                    updateTicket(ticketArray.reverse());
               })
     }

     const allStatus = (a) => {
          updateMystatus(a);
          allTicket();
     }

     let [account, updateAccount] = useState([]);

     const allAccount = () => {
          let url = "https://cybotrix.com/webapi/api/allaccount";
          let userdata = { tokenno: localStorage.getItem("tokenno") };
          let postdata = {
               headers: { 'Content-Type': 'application/json' },
               method: 'POST',
               body: JSON.stringify(userdata)
          }
          fetch(url, postdata)
               .then(response => response.json())
               .then(accountArray => {
                    updateAccount(accountArray.reverse());
               })
     }


     useEffect(() => {
          allAccount();
          allTicket();
     }, [mystatus]);

     let [support, updateSupport] = useState("");
     let [status, updateStatus] = useState("");

     const ticketstatus = (ticketid) => {
          let url = "https://cybotrix.com/webapi/api/changestatus";
          let userdata = {
               tokenno: localStorage.getItem("tokenno"),
               ticketid: ticketid,
               supportid: support,
               statustype: status
          };
          let postdata = {
               headers: { 'Content-Type': 'application/json' },
               method: 'POST',
               body: JSON.stringify(userdata)
          }
          fetch(url, postdata)
               .then(response => response.text())
               .then(msg => {
                    alert(msg);
               })
     }

     return (
          <div className="container">
               <div className="row">



                    <div className="col-lg-12 mt-5">
                         <h4 className="text-center"> Total Tickets : {ticket.length} </h4>

                         <div className="radiobutton text-end text-white p-3 ">
                              <div className="row">
                                   <div className="col-lg-6">

                                   </div>
                                   <div className="col-lg-2">

                                        <label> <input type="radio" name="open" onClick={allStatus.bind(this, 'OPEN')} className="one"></input>OPEN</label>
                                   </div>
                                   <div className="col-lg-2">
                                        <label><input type="radio" name="open" onClick={allStatus.bind(this, 'ASSIGN')} className="two"></input>ASSIGN</label>
                                   </div>
                                   <div className="col-lg-2">
                                      <label><input type="radio" name="open" onClick={allStatus.bind(this, 'CLOSE')} className="three"></input> CLOSE</label>
                                   </div>
                              </div>
                         </div>


                         <table className="table table-bordered table-hover shadow-lg">
                              <thead>
                                   <tr className="table-primary text-center">
                                        <th> Ticket No </th>
                                        <th> Name </th>
                                        <th> Contact No </th>
                                        <th> Email Id </th>
                                        <th> Select Type of Problem </th>
                                        <th> Message </th>
                                        <th> Action </th>
                                        <th > Support </th>
                                        <th> Status </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        ticket.map((ticket, index) => {
                                             return (
                                                  <tr key={index}>
                                                       <td> {ticket.id} </td>
                                                       <td> {ticket.name} </td>
                                                       <td> {ticket.contact} </td>
                                                       <td> {ticket.email} </td>
                                                       <td> {ticket.problem} </td>
                                                       <td> {ticket.message} </td>

                                                       <td>
                                                            <select onChange={obj => updateSupport(obj.target.value)} className="support rounded">
                                                                 <option value=""> Choose</option>
                                                                 {
                                                                      account.map((account, index) => {
                                                                           return (
                                                                                <option key={index} value={account.userid}> {account.fullname} </option>
                                                                           )
                                                                      })
                                                                 }
                                                            </select>
                                                       </td>
                                                       <td className="info">
                                                            <select onChange={obj => updateStatus(obj.target.value)} className="form-select rounded">
                                                                 <option> Choose </option>
                                                                 <option value="OPEN"> OPEN </option>
                                                                 <option value="ASSIGN"> ASSIGN </option>
                                                                 <option value="CLOSE"> CLOSE </option>
                                                            </select>

                                                       </td>

                                                       <td>
                                                            <button className="update btn-sm rounded"
                                                                 onClick={ticketstatus.bind(this, ticket.id)}>
                                                                 Update
                                                            </button>
                                                       </td>
                                                  </tr>
                                             )
                                        }
                                        )
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>


     )
}

export default MyTicket;