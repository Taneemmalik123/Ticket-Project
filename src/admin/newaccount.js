import { useState,useEffect } from "react";
import swal from "sweetalert";


const NewAccount=()=>{

    let[name,updateName]=useState("");
    let[email,updateEmail]=useState("");
    let[password,updatePassword]=useState("");
    let[mobile,updateMobile]=useState("");
    let[city,updateCity]=useState("");



    const save = () =>{
        let url = "https://cybotrix.com/webapi/api/createaccount";
        let userdata = {
         tokenno:localStorage.getItem("tokenno"),
         name:name,
         email:email,
         password:password,
         mobile:mobile,
         city:city
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
        })
     }
     
return(
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="text-success text-center"> Account Details </h1>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow-lg mt-4">
                <div>
                    <input type="text" placeholder="Enter Your Name" className="form-control mt-2" value={name}
                     onChange={obj => updateName(obj.target.value)}></input>
                </div>
                <div>
                    <input type="email" placeholder="Enter Your Email-Id" className="form-control mt-4"
                    value={email}
                    onChange={obj => updateEmail(obj.target.value)}></input>
                </div>
                <div>
                    <input type="password" placeholder="Enter Password" className="form-control mt-4"
                    value={password}
                    onChange={obj => updatePassword(obj.target.value)}></input>
                </div>
                <div>
                    <input type="number" placeholder="Enter Mobile-No" className="form-control mt-4"
                    value={mobile}
                    onChange={obj => updateMobile(obj.target.value)}></input>
                </div>
                <div>
                    <input type="text" placeholder="Enter City" className="form-control mt-4"
                    value={city}
                    onChange={obj => updateCity(obj.target.value)}></input>
                </div>
                <div align="center" className="pb-2">
                    <button className="btn btn-danger mt-4 btn-lg " onClick={save}> Save</button>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
)
}

export default NewAccount;