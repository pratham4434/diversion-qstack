import React,{useState} from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
// import { Navbar } from '../../components'
import "./submitquestion.css";
import Timer from "../../components/timer/Timer";
import Input from "./Input";
// import Connecting from "../../components/doubtsession/Connecting";
const SubmitQuestion = () => {
  //const [timers,setTimers]=useState(true);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
     
      
      <Input />
      {/* <Connecting /> */}
    </>
  );
};

export default SubmitQuestion;
