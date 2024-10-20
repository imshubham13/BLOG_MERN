import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Display = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      if (params.id) {
        let result = await axios.get(
          `http://localhost:5000/api/displayRecord1/${params.id}`
        );
        setData(result.data);
      } else {
        let result = await axios.get(`http://localhost:5000/api/displayRecord`);
        setData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = data.map((e) => {
    return (
      <div>
        {/* {e._id} */}
        <div className="row">
          <div className="col">
            <h2>{e.blog}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>{e.blog_type}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>{e.blog_description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>{e.create_by}</h6>
          </div>
        </div>
      </div>
    );
  });

  return <div>{displayData}</div>;
};

export default Display;
