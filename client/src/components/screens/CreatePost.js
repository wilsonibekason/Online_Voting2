import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const CretePost = () => {
  const [data, setData] = useState([]);
  /***
 *    fetch("http://localhost:5000/posts", {})
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
 */
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => res.data)
      .then((data) => {
        setData(data && data.posts);
      })
      .catch((err) => console.error(err));
    // setData(result.posts);
  }, []);
  let total = 0;

  data.map((item) => {
    total += item.votes.length;
  });
  console.table(data);

  return (
    <div
      style={{
        fontFamily: "Radja",
      }}
    >
      <table style={{ width: "80%", marginTop: "50px", marginLeft: "10%" }}>
        <thead style={{ fontSize: "22px" }}>
          <tr>
            <th>Option</th>
            <th>Symbol</th>
            <th>Vote</th>
            <th className="text-2xl font-extrabold text-red-900">
              Persentage Vote
            </th>
          </tr>
        </thead>

        {data.map((item) => (
          <tbody
            key={item.title}
            style={{
              maxHeight: "400px",
              backgroundColor: "whitesmoke",
            }}
          >
            <tr>
              <td
                style={{
                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </td>

              <td>
                <img
                  src={item.photo}
                  style={{
                    width: "80px",
                    height: "80px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </td>
              <td style={{ fontSize: "19px", fontWeight: "700" }}>
                {item.votes.length}
              </td>
              <td>{((item.votes.length / total) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        ))}
      </table>
      <p
        style={{
          fontSize: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <b
          style={{
            backgroundColor: "white",
            marginTop: "5rem",
            whiteSpace: "nowrap",
            fontWeight: "bolder",
          }}
        >
          Total counting Vote : {total}
        </b>
      </p>
    </div>
  );
};

export default CretePost;
