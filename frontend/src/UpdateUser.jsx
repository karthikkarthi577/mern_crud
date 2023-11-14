import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  let { id } = useParams();
  let [state, setState] = useState({
    Name: "",
    Email: "",
    Age: "",
  });

  useEffect(() => {
    async function fetching() {
      let fetchedData = await axios.get(`http://localhost:5000/getUser/${id}`);
      setState(fetchedData.data);
    }
    fetching();
  }, []);
  let { Name, Age, Email } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let updateData = await axios.put(
      `http://localhost:5000/updateUser/${id}`,
      state
    );
    console.log(updateData.data);
  };
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            name="Name"
            value={Name}
            id=""
            placeholder="enter Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Age"
            value={Age}
            id=""
            placeholder="enter Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Email"
            value={Email}
            id=""
            placeholder="enter Age"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default UpdateUser;
