import { useState,useEffect } from "react";
import swal from "sweetalert";

const Mylogin = () => {
    let [email,pickEmail]=useState("");
    let [password,pickPassword]=useState("");

    const goLogin = () =>{
        let url = "https://cybotrix.com/webapi/login/auth";
        let userdata = {email:email, password:password};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
             if(userinfo.status=="SUCCESS")
             {
                 localStorage.setItem("tokenno", userinfo.tokenno);
                 localStorage.setItem("fullname", userinfo.name);
                 localStorage.setItem("type", userinfo.type );
                 window.location.reload();
             }else{
                 alert("Invalid or not exists")
             }
        })
     }
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4">
                </div>

                <div className="col-lg-4">
                    <div className="text-center">
                    <h2><i className="fa fa-heartbeat p-4"></i>Medical Planet</h2>
                    </div>
                    <div className="card">
                        <div className="card-header bg-primary text-white fa fa-lock p-4 style"> Login </div>
                        <div className="card-body">

                            <div className="input-group mb-3 ">
                                <span className="input-group-text fa fa-envelope p-3 "></span>
                                <input type="email" placeholder="email" className="form-control"
                                value={email}
                                onChange={obj=>pickEmail(obj.target.value)}/> 
                            </div>

                            <div className="input-group mb-3 ">
                                <span className="input-group-text fa fa-lock p-3 "></span>
                                <input type="password" placeholder="password" className="form-control"
                               value={password}
                               onChange={obj=>pickPassword(obj.target.value)}/> 
                            </div>


                            <div className="input-group mb-3 text-center">
                                <button className="bg-success form-control text-white " onClick={goLogin}> Login <i className="fa-solid fa-arrow-right" /></button>
                            </div>

                            <hr />
                            <div className="text-center">
                            <a href="forgot password" className="text-primary">forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
 </div>
  )
}

export default Mylogin;