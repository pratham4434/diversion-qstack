import React, { useState, useContext } from "react";
import imagepc from "../../assets/Dictionary-pana.svg";
import { AuthContext } from "../../context/AuthContext";
import { postDoubt } from "../../requests/defaultcall";

const Input = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const [puser, setPuser] = useState({});

  const { user } = useContext(AuthContext);

  console.log("here we are");
  console.log(user);

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

    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("entered in handlesubmit");
      console.log("id==> ", user._id);

      const info = await postDoubt({
        title: title,
        desc: desc,
        image: image,
        username: user.username,
      });
      if (info) {
        console.log("everything is fine");
      } else {
        console.log("error occureed");
      }
    } catch (err) {
      console.log("error occured in doubt page");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="cover_rectangle2">
          <div className="section-1">
            <h1>Submit Your Question:</h1>

            <input
              className="section-2-1_inp"
              placeholder="Enter your question title here"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="section-2">
            <div className="section-2-2">
              <input
                className="section-2-2_inp"
                type="file"
                id="file3"
                onChange={uploadImage}
              />
              <label For="file3">
                <i className="fa-regular fa-image"></i>
                &nbsp; Upload Here
              </label>
            </div>
            <div className="section-2-1">
              <img src={imagepc} className="pcimage" />
            </div>

            <div className="section-2-2_drop input-btn">
              <select className="select-input" name="cars" id="cars">
                <option value="Others">Others</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
                <option value="Python">Python</option>
              </select>
            </div>

            <h2 className="sect-desc">
              Enter the subject and title of your doubt:
            </h2>
            <input
              className="section-2-1_inp title-ques"
              placeholder="Enter your question title here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button
              className=" submit gpt3__header-content__input-ask"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div className="free-space2"></div>
    </>
  );
};

export default Input;
