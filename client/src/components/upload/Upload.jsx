import axios from 'axios';
import React from 'react';
import {useState} from 'react';


function Upload() {
    /*
    const cloudinaryref=useRef();
    const widgetref=useRef();
    useEffect(()=>{
        cloudinaryref.current=window.cloudinary;
        widgetref.current=cloudinaryref.current.createUploadWidget({
            cloudName:"dkzpbucfz",
            uploadPresent:'p7klqexy',

        },function(err,result){

        })
    },[])*/
    const [loading,setLoading]=useState(false);
    const [image,setImage]=useState("");

    const uploadImage=async(e)=>{
          const files=e.target.files;
          console.log("some error occured");
          console.log(files);
          const data=new FormData();
          data.append('file',files[0]);
          data.append('upload_preset','ppn3qr4u');
          setLoading(true);

          const res=await fetch("https://api.cloudinary.com/v1_1/dkzpbucfz/image/upload",{
            method:'POST',
            body:data
          });

          const file=await res.json();
          setImage(file.secure_url);
          console.log("we are here now ");
          console.log(file.secure_url);
          setLoading(false);
    }

    

  return (
    <div>
       <input type="file" name='file' placeholder="upload your profile" onChange={uploadImage}/>
       

       <div>
        {
            loading?(
                <h3>loading</h3>
            ):(
                <img src={image}/>
            )
        }
       </div>
    </div>
   
  )
}

export default Upload;