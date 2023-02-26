const express=require("express");
const http=require("http");
const app=express();
const server=http.createServer(app);
const io=require("socket.io")(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})
io.on("connection",(socket)=>{
    
    socket.on("join-room",(name)=>{
        console.log("someone joined the room")
        socket.join(name);
    })

    socket.on("sendmsg",(data)=>{
        io.to(data.to).emit("incomingmsg",data);
    })

    socket.on("send_message", (data) => {
        console.log("msg is recieved by the server");
        socket.to(data.room).emit("receive_message", data);
      });


    socket.on("disconnect",()=>{
        console.log("socket is disconnected");
    })
})

server.listen(5000,()=>{
    console.log("server is listening at port 5000")
})
