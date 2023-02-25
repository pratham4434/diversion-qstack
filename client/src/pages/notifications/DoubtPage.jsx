import React, { useState,useEffect } from "react";
import DoubtCard from "../../components/doubtpage/DoubtCard";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import { getDoubts } from "../../requests/defaultcall";
import "./doubtpage.css";
const DoubtPage = () => {


   const [doubts,setDoubts]=useState([]);

   useEffect(() => {
    async function fetchData() {
      // You can await here
     const info=await getDoubts();
     console.log("we are in doubt page");
     console.log(info.data);
     setDoubts(info.data);
      // ...
    }
    fetchData();
  }, []);



  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <div className="free-space"></div>
      <div className="wrapper">
        <div className="title-section">
       
          <h1> Doubts</h1>
        </div>

        <div className="input-section">
          <input placeholder="Search for something" className="input-spec" />
          {/* <i class="fa-sharp fa-solid fa-magnifying-glass icon"></i> */}
        </div>
      </div>
      <div className="line2"></div>
      <div className="session">
        <div className="card-wrapper">
        {
          doubts.map((item)=><DoubtCard title={item.title} desc={item.desc} image={item.image} username={item.creator} />)
        }
        {/* <DoubtCard/> */}
        </div>
      </div>
      <div className="free-space2"></div>
    </div>
  );
};

export default DoubtPage;
