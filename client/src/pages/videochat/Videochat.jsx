import React,{useEffect, useState,useRef} from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./videochat.css";
import io from "socket.io-client";
import Peer from "simple-peer";


const socket=io.connect("http://localhost:5000");
const Videochat = () => {
  const [stream,setStream]=useState("");
  const [me,seMe]=useState("");
  const [caller,setCaller]=useState("");
  const [name,setName]=useState("");
  const [idtocall,setIdtocall]=useState("");
  const [callaccepted,setCallaccepted]=useState(false);
  const [callended,setCallended]=useState(false);
  const [callersignal,setCallersignal]=useState("");
  const [receivingcall,setReceivingcall]=useState(false);
  const [id,setId]=useState("");
  const myvideo=useRef();
  const uservideo=useRef();
  const connectionref=useRef();

  useEffect(()=>{
     
     navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
      setStream(stream)
      myvideo.current.srcObject=stream;
     }) 

     socket.on("me",(id)=>{
      setId(id);
     })

     socket.on("calluser",(data)=>{
      setReceivingcall(true);
      setCaller(data.from);
      setName(data.name);
      setCallersignal(data.signal);
     })

  },[])

  const calluser=(id)=>{
    const peer=new Peer({
      initiator:true,
      trickle:false,
      stream:stream
    });
    Peer.on("signal",(data)=>{
      socket.emit("calluser",{
        usertocall:id,
        signalData:data,
        from:me,
        name:name
      })
    })
    Peer.on("stream",(stream)=>{
       uservideo.current.srcObject=stream;
    })
    socket.on("callaccepted",(signal)=>{
      setCallaccepted(true);
      Peer.signal(signal);
    })
    connectionref.current=peer;
  }


  const leavecall=()=>{
    setCallended(true);
    connectionref.current.destroy()
  }

  const answercall=()=>{
    setCallaccepted(true);
    const peer=Peer({
      initiator:false,
      trickle:false,
      stream:stream
    })
    peer.on("signal",(data)=>{
      socket.emit("answercall",{
        signal:data,to:caller
      })
     
    })
    peer.on("stream",(stream)=>{
      uservideo.current.srcObject=stream;
  })
  peer.signal(callersignal);
  connectionref.current=peer
  }

  



  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <div className="wrapper">
        <div className="wrapper-video">
          <div className="tutor">displayT</div>
          <div className="buttons-bar">
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
          </div>
          <br />
          <br />
        </div>
        <div className="wrapper-chat">
          <div className="chat">
            <div className="student">displayS</div>
            <div className="text">
              <i className="icons fas fa-user"></i>
              <input
                className="input-field2"
                type="text"
                placeholder="Start typing..."
              />
              <button onClick={calluser}>call user</button>
              <button onClick={answercall}>answer call</button>
              <button onClick={leavecall}>end call</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videochat;
