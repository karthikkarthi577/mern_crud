import React, { useState } from "react";
import axios from "axios";
const Create = () => {
  let [state, setState] = useState({
    Name: "",
    Age: "",
    Email: "",
  });
  let { Name, Age, Email } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let postData = await axios.post("http://localhost:5000/createUser", state);
    console.log(postData.data);
  };
  return (
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
          placeholder="enter Age"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Email"
          value={Email}
          id=""
          placeholder="enter Email"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Create;
