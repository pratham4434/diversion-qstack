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
    socket.emit("connected");

    socket.on("calluser",(data)=>{
        io.to(data.usertocall).emit("calluser",{
            signal:data.signaldata,
            from:data.from,
            name:data.name
        })
    })


    socket.on("disconnect",()=>{
        console.log("socket is disconnected");
    })
})

server.listen(5000,()=>{
    console.log("server is listening at port 5000")
})
