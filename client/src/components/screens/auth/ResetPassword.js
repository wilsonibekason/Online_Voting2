import React, { useState, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const PostData = () => {
    axios
      .post(`/reset-password-verify/${token}`, {
        password,
        email,
        confirmPassword,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.error) {
          toast.error(data.error, { duration: 3000 });
        } else {
          toast.success("YOU HAVE SUCCESSFULLY RESET YOUR PASSWORD", {
            duration: 3000,
          });
          history.push("/signin");
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
  return (
    <div
      className="mycard"
      style={{ width: "60%", margin: "auto", paddingTop: "5%" }}
    >
      <div className="col-12">
        <div
          className="card "
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "20px",
            border: "1px solid blue",
          }}
        >
          {/*  */}
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
            <div className="col">
              <input
                type="password"
                placeholder="password"
                value={password}
                style={{ height: "50px", width: "80%", marginLeft: "10%" }}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <br />
            <div className="col">
              <input
                type="password"
                placeholder="password"
                value={password}
                style={{ height: "50px", width: "80%", marginLeft: "10%" }}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <br />
            <button
              className="btn btn-success mt-4 "
              style={{ height: "50px", width: "80%", marginLeft: "10%" }}
              onClick={() => PostData()}
            >
              Reset your password
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
