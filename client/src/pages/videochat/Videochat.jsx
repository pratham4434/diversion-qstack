import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./videochat.css";
import io from "socket.io-client";
import Peer from "simple-peer";
import { BiMicrophone } from "react-icons/bi";
import { GoScreenFull } from "react-icons/go";
import { FaPhoneSlash, FaVideo } from "react-icons/fa";
import Message from "../../components/message/Message";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import {ZegoUIKITPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
// import Timer from "../../components/timer/Timer";



const socket = io.connect("http://localhost:5000");
const Videochat = () => {
  const { user } = useContext(AuthContext);
  const info = useLocation();

  console.log("we are in videochat my friend");
  console.log(user);
  console.log(info);
  const [timers,setTimers]=useState(true);
  const [msg, setMsg] = useState([]);
  const [currmsg, setCurrmsg] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    if (user.role === "student") {
      console.log("i am student and joined the room");
      socket.emit("join-room", user.username);
      setRoom(user.username);
    } else {
      console.log("i am teacher and joined the room");
      socket.emit("join-room", info.state.username);
      setRoom(info.state.username);
    }
    socket.emit("join-room", room);
  }, []);

  //  socket.on("incomingmsg",(data)=>{
  //   setMsg([...msg,data.msg]);
  //  })
  socket.emit("sendmsg", {
    from: user.username,
    msg: currmsg,
    room: room,
  });

  const sendmsg = () => {
    console.log("sending msg");
    setMsg([...msg, { msg: currmsg, room: room, from: user.username }]);

    socket.emit("send_message", {
      room: room,
      from: user.username,
      msg: currmsg,
    });
    setCurrmsg("");
  };
  socket.on("receive_message", (data) => {
    console.log("message recieved");
    setMsg([...msg, data]);
    console.log("this is our msg till now");
    console.log(msg);
  });

  

  // const navigate=useNavigate();
  // const handleJoinRoom=useCallback(
  //   () => {
      
  //   },
  //   [],
  // )

  const myMeeting=async(element)=>{
    const appID=408473423;
    const serverSecret="33b0ba5b8f16d32bf89d07236aeaa4c9";
    const kitToken=ZegoUIKITPrebuilt.generateKitTokenForTest(appID,serverSecret,room,user._id,user.username);
    const zc=ZegoUIKITPrebuilt.create(kitToken);
    zc.joinRoom({
      container:element,
      scenerio:{
        mode:ZegoUIKITPrebuilt.OneONoneCall,
      }
    })
  }
  

  /*
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myvideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMyid(id);
    });

    socket.on("calluser", (data) => {
      setReceivingcall(true);
      setCaller(data.from);
      setName(data.name);
      setCallersignal(data.signal);
    });
  }, []);

  const calluser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    Peer.on("signal", (data) => {
      socket.emit("calluser", {
        usertocall: id,
        signalData: data,
        from: myid,
        name: name,
      });
    });
    Peer.on("stream", (stream) => {
      uservideo.current.srcObject = stream;
    });
    socket.on("callaccepted", (signal) => {
      setCallaccepted(true);
      Peer.signal(signal);
    });
    connectionref.current = peer;
  };

  const leavecall = () => {
    setCallended(true);
    connectionref.current.destroy();
  };

  const answercall = () => {
    setCallaccepted(true);
    const peer = Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answercall", {
        signal: data,
        to: caller,
      });
    });
    peer.on("stream", (stream) => {
      uservideo.current.srcObject = stream;
    });
    peer.signal(callersignal);
    connectionref.current = peer;
  };
*/
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      {/* {
        (timers)? <Timer timers={timers} setTimers={setTimers} /> :null
      } */}
      <div className="free-space" style={{ height: "80px" }}></div>
      <div className="wrapper">
        <div className="wrapper-video">
          <div className="tutor">displayT</div>
          <div className="buttons-bar">
            <div className="button">
              <BiMicrophone size={70} />
            </div>
            &nbsp;
            <div className="button">
              <GoScreenFull size={70} />
            </div>
            &nbsp;
            <div className="button">
              <FaPhoneSlash size={70} />
            </div>
            &nbsp;
            <div className="button">
              <FaVideo size={70} />
            </div>
            &nbsp;
          </div>
        </div>
        <div className="wrapper-chat">
          <div className="chat">
            {/* <div className="student"></div> */}
            <div className="funny">
              {/* {stream && (
                <video
                  playsInline
                  muted
                  ref={myvideo}
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              )} */}
              {/* <div ref={myMeeting}/> */}
              
            </div>
            <h1 className="messages-h1" >Message Box:</h1>

            <div className="messages">

              {msg.map((item) => (
                <Message data={item} my={user.username} />
              ))}
            </div>
            <div style={{display:"flex"}}>
              <input
                value={currmsg}
                className="naya-input"
                placeholder="Start typing..."
                onChange={(e) => setCurrmsg(e.target.value)}
              />
              <button className="button2" onClick={sendmsg}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videochat;
