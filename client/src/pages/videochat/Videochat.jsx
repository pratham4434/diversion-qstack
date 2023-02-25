import React, { useEffect, useState, useRef } from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./videochat.css";
import io from "socket.io-client";
import Peer from "simple-peer";
import { BiMicrophone } from "react-icons/bi";
import { GoScreenFull } from "react-icons/go";
import { FaPhoneSlash, FaVideo } from "react-icons/fa";
import Message from "../../components/message/Message";

const socket = io.connect("http://localhost:5000");
const Videochat = () => {
  const [stream, setStream] = useState("");
  const [msg, setMsg] = useState("");
  const [myid, setMyid] = useState("");
  const [caller, setCaller] = useState("");
  const [name, setName] = useState("");
  const [idtocall, setIdtocall] = useState("");
  const [callaccepted, setCallaccepted] = useState(false);
  const [callended, setCallended] = useState(false);
  const [callersignal, setCallersignal] = useState("");
  const [receivingcall, setReceivingcall] = useState(false);
  const [id, setId] = useState("");
  const myvideo = useRef();
  const uservideo = useRef();
  const connectionref = useRef();

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

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
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
              {stream && (
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
              )}
            </div>
            <div className="messages">
              <Message />
            </div>
            <input
              value={msg}
              className="section-2-1_inp444 title-ques"
              placeholder="Start typing"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Videochat;
