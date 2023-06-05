import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import { pwdverify } from "../../../assets";

const SendMail = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  //
  const PostData = () => {
    axios
      .post("http://localhost:5000/password-reset-verification", {
        email,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.error) {
          toast.error(data.error, { duration: 3000 });
        } else {
          toast.success(data.message);
          setIsSubmitting((pre) => !pre);
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
  const formContent = () => (
    <div className="col-6">
      <div
        className="card "
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "20px",
          border: "1px solid blue",
        }}
      >
        <h1>Reset your password</h1>
        <p>
          To reset your password, please enter the email you used to log in.
        </p>
        <div>
          <div className="col">
            <input
              type="text"
              placeholder="email"
              value={email}
              className="form-control"
              style={{ height: "50px", width: "80%", marginLeft: "10%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
          {/* Button */}
          <button
            className="btn btn-success mt-4 "
            style={{ height: "50px", width: "80%", marginLeft: "10%" }}
            onClick={() => PostData()}
            // onClick={() => toast.success("Help Me money")}
          >
            Get reset link
          </button>
          {/* TEXT ELEMENT */}
          <div>
            <p>
              never mind
              <a href="#"> take me back to login page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const successContent = () => (
    <div className="col-6">
      <div
        className="card "
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "20px",
          border: "1px solid blue",
        }}
      >
        <img src={pwdverify} />
        <p>A verification link was sent to ${email} to reset your password </p>
      </div>
    </div>
  );
  //
  return (
    <div
      stylee={{
        maxWidth: "80%",
        width: "100%",
        margin: "auto",
      }}
    >
      {isSubmitting ? successContent() : formContent()}
    </div>
  );
};

export default SendMail;
