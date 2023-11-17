import {Link} from "react-router-dom";
import React from "react";

const Myheader=()=>{

    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand text-white" href="#">
                    <i className="fa fa-store fa-lg"></i> SUPPORT
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/"> 
                                <i className="fa fa-home"></i> Dashboard
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/ticket"> 
                                <i className="fa fa-plus"></i> Add Ticket
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/ticket" onClick={logout}> 
                                <i className="fa fa-power-off "></i> Logout
                            </Link>
                        </li>
            
                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Myheader;