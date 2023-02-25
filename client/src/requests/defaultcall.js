import axios from "axios";
import jwt_decode from "jwt-decode";


const axiosJWT = axios.create({
  baseURL:"http://localhost:8000/"
});

var user={};


export const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      user={
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      };
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //login call
  export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      console.log("here i am");
      const res = await axios.post("http://localhost:8000/api/auth/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log("going well ");
      console.log(res);
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };
  //user update
  export const updateUser=async (userid,data)=>{
    try{
      const res=await axios.put("http://localhost:8000/api/users/"+userid,data);
      console.log("updated successfully");
      return res;
    }catch(err){
       console.log("some error occured while updating user account ",err);
       return err;
    }
  }
  //get user
  export const getUser=async(userid,dispatch)=>{
    try{
      const info=await axios.get("http://localhost:8000/api/users/"+userid);
      dispatch({ type: "LOGIN_SUCCESS", payload: info.data });
      return info;
    }catch(err){
       console.log("some error occured while fetching user data ",err);
    }
  }

  //posting my doubt
  export const postDoubt=async(body)=>{
    try{
      console.log("we are here in postDoubt so relax")
       const info=await axios.post("http://localhost:8000/api/doubt",body);
       console.log("this is my info ")
       console.log(info)
       return info;
    }catch(err){
       console.log("some error occured in postDoubtiiiiiiiiiiiiiiiiiiiiiiiiiii");
       return err;
    }
  }

  //getting all doubts
  export const getDoubts=async()=>{
    try{
       //code
       const data=await axios.get("http://localhost:8000/api/doubt");
       return data;
    }catch(err){
         //err
         return err;
    }
  }