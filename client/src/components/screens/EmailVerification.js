import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert";

const EmailVerification = () => {
  const history = useHistory();
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("");
  const [isEmailVerified, setIsEmailVerifed] = useState(false);
  const verifyMail = (id) => {
    axios
      .post("http://localhost:5000/verifyemail", { isEmailVerified, _id: id })
      .then((res) => res.data)
      .then((_) => {
        toast.success("Verification successful");
      })
      .catch((err) => {
        console.error("Verification failed");
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/verify/${token}`)
      .then((res) => {
        const data = res.data;
        setVerificationStatus(data.message);
        toast.success("Verification successful");
        verifyMail(data.userId);
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        setVerificationStatus("An error occurred during email verification");
        toast.error("An error occurred during email verification");
      });
  }, [token]);

  return (
    <div>
      <h3>Email Verification</h3>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;
