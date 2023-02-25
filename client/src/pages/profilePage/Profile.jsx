import React, { useContext, useState, useEffect } from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import Card from "../../components/profile/Card";
import Stack from "../../components/profile/Stack";
import "./profile.css";
import { AuthContext } from "../../context/AuthContext";
import { getUser } from "../../requests/defaultcall";
import { Link } from "react-router-dom";

const Profile = () => {
   const {user,dispatch}=useContext(AuthContext);
   console.log("profile page completed");
   console.log(user.others);

   const [mydata,setMydata]=useState({});
   const [stack,setStack]=useState(["please fill your intrested topics in complete profile section"]);
   useEffect(() => {
     const getData = async () => {
       try {
        console.log("sending request for getting info about user");
        console.log(user);
        if(user.others){
          const info = await getUser(user.others._id,dispatch);
          console.log("chekcing info data");
          console.log(info.data);
          setMydata(info.data);
          setStack(info.data.topics)
        }else{
          const info=await getUser(user._id,dispatch);
          setMydata(info.data);
          console.log("chekcing info data");
          console.log(info.data);
          console.log(stack);
          setStack([...stack,"completed"]);
          console.log("this is completed");
          setStack(info.data.topics)
          console.log(stack);
        }
         
       } catch (err) {
         console.log(err);
       }
     };
     getData();
   }, []);
  
  console.log("i am in my profile ");
   console.log(mydata);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <div className="free-space"></div>
      <div className="cover_rectangle"><img src={mydata.cover}/></div>
      <div className="cover_pfp"> <img src={mydata.profile}/></div>
      <div className="cover_bluetick">
        <i className="fa-solid fa-check"></i>
      </div>

      <div className="profile_title">
        <div className="profile-top-wrapper">
          <div className="profile-desc-0">
            <h1>{mydata.name} </h1>
            <h1 className="profile_tag22">@{mydata.username}</h1>
          </div>
          <div className="profile_desc">
            <h1 className="profile_tag2">{mydata.bio}</h1>
          </div>
        </div>
        <div className="profile_stack-wrapper">
         { 
          
          stack && stack.map((data)=><Stack
           data={data}
         />)}
        </div>
      </div>
      <div className="profile_cta">
        <Link to="/completeprofile">
          <button className="profile_cp-btn">Complete Profile</button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/submitquestion">
          <button className="profile_cta-btn">ASK DOUBT</button>
        </Link>
        &nbsp;&nbsp;
        <h1 style={{ fontSize: "large", textWrap: "break-word" }}>
          200+ <small>Doubts Solved</small>
        </h1>
      </div>

      <div className="session2">
        <h1 className="session-title">Recent Sessions</h1>
        <div className="line"></div>
        <div className="recent-session">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="free-space2"></div>

    </>
  );
};

export default Profile;
