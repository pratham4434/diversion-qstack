import React from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./completeprofile.css";

const TutCompleteProfile = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />

      <div className="cover_rectangle2">
        <div className="tut-left">
          <form>
            <div className="left-label-div">
              <label
                className="left-label"
                style={{
                  position: "absolute",
                  top:"4.5rem",
                  color: "#007bff",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                  height: "40px",
                }}
              >
                Complete your Profile <small>(Tutor) </small>
              </label>
            </div>
            
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <br/>
            <div className="left-label-div">
              <label className="left-label">Full Name:</label>
            </div>
            <input
              className="left-input"
              placeholder="Enter your full name here!"
            />
            <div className="left-label-div">
              <label className="left-label">Location:</label>
            </div>
            <input
              className="left-input"
              placeholder="Enter your location here!"
            />
            <div className="left-label-div">
              <label className="left-label">
                Add your Cover photo and Profile photo:
              </label>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <div className="upload-img">
              <input type="file" id="file1" className="left-input" />
              <div className="upload-img-spec">
                <label for="file1">
                  <i className="fa-regular fa-image"></i>
                  &nbsp; Cover Photo
                </label>
              </div>
              <input id="file2" type="file" className="left-input" />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="upload-img-spec2">
                <label for="file2">
                  {" "}
                  <i className="fa-regular fa-image"></i>
                  &nbsp; Profile Pic
                </label>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="left-label-div">
              <label className="left-label">Gender:</label>
            </div>
            <div className="left-label-div">
              <select
                className="select-input-cp"
                required
                name="cars"
                id="cars"
              >
                <option value="volvo">select</option>

                <option value="volvo">Male</option>
                <option value="saab">Female</option>
                <option value="opel">Transgender</option>
                <option value="audi">Prefer Not To Say</option>
              </select>
            </div>
            <br />
            <br />
            <br />
          </form>
        </div>
        <div className="tut-right">
          <div className="left-label-div">
            <label className="left-label">
              Phone No:<small> (Would not be displayed on your profile)</small>
            </label>
          </div>
          <input
            className="left-input"
            style={{ fontSize: "large" }}
            placeholder="Enter your mobile number here!"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="left-label-div">
            <label className="left-label">
              Bio: <small> (Would be displayed on your profile)</small>
            </label>
          </div>
          <input
            className="left-input"
            style={{ height: "18rem", fontSize: "large", verticalAlign: "top" }}
            placeholder="Enter your bio here!"
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
            Languages/Stacks known:
          </label>
          <div className="left-label-div">
            <input
              style={{
                height: "1.2rem",
                fontSize: "large",
                verticalAlign: "top",
              }}
              // placeholder="Enter your bio here!"
              type="checkbox"
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
              // placeholder="Enter your bio here!"
              type="checkbox"
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
              // placeholder="Enter your bio here!"
              type="checkbox"
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
              // placeholder="Enter your bio here!"
              type="checkbox"
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
            <button type="button">Submit</button>
          </div>
        </div>
      <div className="free-space2"></div>

      </div>

    </>
  );
};

export default TutCompleteProfile;
