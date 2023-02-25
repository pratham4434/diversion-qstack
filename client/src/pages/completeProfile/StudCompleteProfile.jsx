import React from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

import "./completeprofile.css";
import { updateUser } from "../../requests/defaultcall";
const StudCompleteProfile = () => {
  const history=useHistory();
  const { user } = useContext(AuthContext);
  console.log("user info my man");
  console.log(user);
  const [state, setState] = useState({
    name: "",
    bio: "",
    collage: "",
    phone: "",
    gender: "",
    profile: "",
    cover: "",
  });

  const [userinfo, setUserInfo] = useState({
    topics: [],
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log("again something changed ");
    console.log(state);
  };

  const handleChange2 = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { topics } = userinfo;
    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        topics: [...topics, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        topics: topics.filter((e) => e !== value),
      });
    }
    console.log("something changed ");
    console.log(userinfo);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("submitted data");
    console.log(state);
    console.log(userinfo);
    const userid = user._id;

    const res=await updateUser(userid, {
      name: state.name,
      _id: user._id,
      collage: state.collage,
      gender: state.gender,
      topics: userinfo.topics,
      phone: state.phone,
      profile: state.profile,
      cover: state.cover,
      bio: state.bio,
      password: user.password,
    });
    history.push("/profile");
  };

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log("some error occured");
    console.log(files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ppn3qr4u");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkzpbucfz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    console.log("we are here now ");
    console.log(file.secure_url);
    setState({
      ...state,
      [e.target.name]: file.secure_url,
    });
    setLoading(false);
  };

  return (
    <>
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <Navbarvc />
        <form onSubmit={handleSubmit}>
          <div className="cover_rectangle2">
            <div className="tut-left">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <br />
              <div className="left-label-div">
                <label className="left-label">Full Name:</label>
              </div>
              <input
                className="left-input"
                placeholder="Enter your full name here!"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
              <div className="left-label-div">
                <label className="left-label">University's Name:</label>
              </div>
              <input
                className="left-input"
                placeholder="Enter your location here!"
                name="collage"
                value={state.collage}
                onChange={handleChange}
              />
              <div className="left-label-div">
                <label className="left-label">
                  Add your Cover photo and Profile photo:
                </label>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <div className="upload-img">
                <input
                  type="file"
                  id="file1"
                  name="cover"
                  className="left-input"
                  onChange={uploadImage}
                />
                <div className="upload-img-spec">
                  <label for="file1">
                    <i className="fa-regular fa-image"></i>
                    &nbsp; Cover Photo
                  </label>
                </div>
                <input
                  id="file2"
                  type="file"
                  name="profile"
                  className="left-input"
                  onChange={uploadImage}
                />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="upload-img-spec2">
                  <label for="file2">
                    <i className="fa-regular fa-image"></i>
                    &nbsp; Profile Pic
                  </label>
                </div>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="left-label-div">
                <label className="left-label">Gender:</label>
              </div>
              <div className="left-label-div2">
                <select
                  className="select-input-cp"
                  name="gender"
                  onChange={handleChange}
                  value={state.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="secret">Prefer Not To Say</option>
                </select>
              </div>
              <br />
              <br />
              <br />
            </div>
            <div className="tut-right">
              <div className="left-label-div">
                <label className="left-label">
                  Phone No:
                  <small> (Would not be displayed on your profile)</small>
                </label>
              </div>
              <input
                className="left-input"
                style={{ fontSize: "large" }}
                placeholder="Enter your mobile number here!"
                name="phone"
                onChange={handleChange}
                value={state.phone}
              />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="left-label-div">
                <label className="left-label">
                  Bio: <small> (Would be displayed on your profile)</small>
                </label>
              </div>
              <input
                className="left-input"
                style={{
                  height: "18rem",
                  fontSize: "large",
                  verticalAlign: "top",
                }}
                placeholder="Enter your bio here!"
                name="bio"
                value={state.bio}
                onChange={handleChange}
              />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label
                style={{
                  color: "#0456b3",
                  height: "1.2rem",
                  fontSize: "larger",
                  textAlign: "left",
                }}
                className="left-label"
              >
                {
                  (user.role==="tutor")?"Expertise In :":"Interested In Topics :"
                }
              </label>
              <div className="left-label-div2">
                <input
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                  }}
                  type="checkbox"
                  name="topics"
                  value="javascript"
                  onChange={handleChange2}
                />
                &nbsp; &nbsp;
                <label
                  className="left-label"
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                    marginTop: "0.8rem",
                  }}
                >
                  JavaScript
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                  }}
                  type="checkbox"
                  name="topics"
                  value="reactjs"
                  onChange={handleChange2}
                />
                &nbsp; &nbsp;
                <label
                  className="left-label"
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                    marginTop: "0.8rem",
                  }}
                >
                  ReactJS
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                  }}
                  type="checkbox"
                  name="topics"
                  value="nodejs"
                  onChange={handleChange2}
                />
                &nbsp; &nbsp;
                <label
                  className="left-label"
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                    marginTop: "0.8rem",
                  }}
                >
                  NodeJS
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                  }}
                  type="checkbox"
                  name="topics"
                  value="expressjs"
                  onChange={handleChange2}
                />
                &nbsp; &nbsp;
                <label
                  className="left-label"
                  style={{
                    height: "1.2rem",
                    fontSize: "large",
                    verticalAlign: "top",
                    marginTop: "0.8rem",
                  }}
                >
                  ExpressJS
                </label>
              </div>

              <div className="button-cp">
                <button type="submit">Submit</button>
              </div>
            </div>
        <div className="free-space2"></div>

          </div>
        </form>
      </>
    </>
  );
};

export default StudCompleteProfile;
