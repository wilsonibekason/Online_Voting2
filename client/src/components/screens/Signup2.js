import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { sName, bName, stateNames, specificationData } from "../utils";
import M from "materialize-css";
import { toast } from "react-hot-toast";
import axios from "axios";
import validator from "validator";
const SignUp = () => {
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [mobile, setMobile] = useState("");
  const [branch, setBranch] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    if (url) {
      uploadFields();
    }
  }, [url]);
  const uploadPic = async () => {
    const data = new FormData();
    console.log("Data Response", data);
    data.append("file", image);
    data.append("upload_preset", "voting");
    data.append("cloud_name", "dvfpkko1z");
    try {
      const data_1 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload",
        data
      );
      setUrl(data_1.url);
      toast.success("Image has been uploaded successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFields = () => {
    if (!validator.isEmail(email)) {
      toast.error("Invalid Email Address");
      return;
    }

    axios
      .post("http://localhost:5000/signup", {
        firstname,
        lastname,
        password,
        email,
        city,
        stateName,
        mobile,
        branch,
        pic: url,
      })
      .then((res) => {
        const data = res.data;
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          history.push("/verifyemail");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error("An error occurred during signup. Please try again.");
        }
      });
  };

  const PostData = () => {
    if (image) {
      uploadPic();
    } else {
      uploadFields();
    }
  };

  return (
    <div className="col-5" style={{ margin: "auto" }}>
      <div className="card px-5 py-2" style={{ margin: "5%" }}>
        <h1 style={{ margin: "auto", marginBottom: "20px" }}>
          Registration Form{" "}
        </h1>
        <div className="row ">
          <div className="col">
            <input
              required={true}
              type="text"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <input
              required={true}
              type="text"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <input
              required={true}
              type="text"
              placeholder="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              required={true}
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <input
              required={true}
              className="form-control"
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            >
              {stateNames.map((item) => (
                <option value={item} key={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <input
              required={true}
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              placeholder="Reg No"
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              placeholder="voter"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              {specificationData.map((item) => (
                <option value={item} key={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="input-group mb-3">
          <input
            required={true}
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* <label className="input-group-text" for="inputGroupFile02">
            Upload
          </label> */}
          <button onClick={uploadPic}>Upload Image</button>
        </div>

        <button
          className="btn btn-success mb-4 mt-2"
          // onClick={() => PostData()}
          onClickCapture={() => uploadFields()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUp;
