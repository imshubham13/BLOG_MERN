import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/getdistinct");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const blogtype = data.map((b) => {
    return (
      <li className="list-group-item">
        <NavLink to={`Disp/${b}`}>{b}</NavLink>
      </li>
    );
  });

  return (
    <div className="conatiner-fluid bg-light">
      <h1>Blogs</h1>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <NavLink to={"/"}>All</NavLink>
        </li>
        {blogtype}
      </ul>
    </div>
  );
};

export default Header;
