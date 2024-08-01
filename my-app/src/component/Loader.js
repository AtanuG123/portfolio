import React from "react";
// import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container" >
     <img style={{width:"41px",height:"41px",marginLeft:"40px"}} src={require("../images/loading.gif")} alt="loader"></img>
    </div>
  );
}